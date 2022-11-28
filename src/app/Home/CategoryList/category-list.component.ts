import { filter } from 'rxjs';
import { CategoriesModel } from './../AddCategory/Model/categories.model';
import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/Users/Shared/users-data.service';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  
  categorylist! :Array<CategoriesModel>;
  constructor(private _userdataservice:UsersDataService) { }
  
  ngOnInit(): void {
    debugger
    let categories = [];
    categories = JSON.parse(localStorage.getItem("Categories") || "{}");
    if(categories.length > 0){  
      this.categorylist =  categories?.filter((item: { userId: string; }) => {
        return item.userId === this._userdataservice.loginedUserId;
     })
    }
  }
    

}
