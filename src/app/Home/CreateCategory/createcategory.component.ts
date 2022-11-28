import { Component, OnInit } from '@angular/core';
import { CategoriesModel } from '../AddCategory/Model/categories.model';

@Component({
  selector: 'createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.scss']
})
export class CreatecategoryComponent implements OnInit {
  
  Categoryname !: CategoriesModel ;
  categoryName : string ="";
  constructor() { }
  
  ngOnInit(): void {
  } 

  // createCategory(){
  //  debugger
  //  this.Categoryname = [this.category]
  //  localStorage.setItem("Categories", JSON.stringify(this.Categoryname));
  // }

  createCategory() {
    debugger

    let categorylist: CategoriesModel = {
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
