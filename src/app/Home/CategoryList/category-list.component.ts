import { Router } from '@angular/router';
import { GifListService } from './../GifList/shared/gif-list.service';
import { filter } from 'rxjs';
import { CategoriesModel } from './../addcategory/Model/categories.model';
import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/Users/Shared/users-data.service';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  
  categorylist! :Array<CategoriesModel>;
  selectedcategory ! :string ;
  selectedcatsection :boolean =false;
  selectedGifList! :string [];
  constructor(private _userdataservice:UsersDataService,private _giflistservice:GifListService,private _router:Router) { }
  
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
    
  handleselectedCategoryclick(event:any){
    debugger
    this.selectedcatsection
    this.selectedcategory= event.target.text;
    this._router.navigateByUrl(`home/savedcategories/${this.selectedcategory}`);
  }

  createcategorybtnclick(){
    this._router.navigateByUrl('home/category');
  }

}
