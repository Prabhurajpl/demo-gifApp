import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.scss']
})
export class CreatecategoryComponent implements OnInit {
  
  Categoryname !:string[];
  category : string ="";
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
    if(this.category != ''){
    let categories = [];
    if (localStorage.getItem("Categories")) {
      categories = JSON.parse(localStorage.getItem("Categories") || "{}");
      categories = [this.category, ...categories];
      
    }
    else {
      categories = [this.category];
    }
    localStorage.setItem("Categories", JSON.stringify(categories));
  }
}

}
