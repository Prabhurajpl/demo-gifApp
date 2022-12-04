import { GifListService } from '../GifList/shared/gif-list.service';
import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/Users/Shared/users-data.service';
import { CategoriesModel } from '../addcategory/Model/categories.model';

@Component({
  selector: 'createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.scss']
})
export class CreatecategoryComponent implements OnInit {
  
  Categoryname !: CategoriesModel ;
  categoryName : string ="";
  gifDatalist !:string[];
  constructor(private _userdataservice:UsersDataService,private _giflistservice:GifListService) { }
  
  ngOnInit(): void {
    this.gifDatalist = this._giflistservice.giflists;
  } 

  createCategory() {
    debugger

    let categorylist: CategoriesModel = {
      userId : this._userdataservice.loginedUserId,
      categoryname: this.categoryName
    }


    if(this.categoryName != ''){
    let categories = [];
    if (localStorage.getItem("Categories")) {
      categories = JSON.parse(localStorage.getItem("Categories") || "{}");
      categories = [categorylist, ...categories];
      
    }
    else {
      categories = [categorylist];
    }
    localStorage.setItem("Categories", JSON.stringify(categories));
  }
}

}
