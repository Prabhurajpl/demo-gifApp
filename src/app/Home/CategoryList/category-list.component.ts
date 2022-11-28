import { CategoriesModel } from './../AddCategory/Model/categories.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  
  categorylist! :Array<CategoriesModel>;
  constructor() { }
  
  ngOnInit(): void {
    debugger
    let categories = JSON.parse(localStorage.getItem("Categories") || "{}");
    if(JSON.stringify(categories) !='{}'){
      this.categorylist = categories;
    }
  }
    

}
