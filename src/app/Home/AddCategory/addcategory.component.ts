import {  Observable,from } from 'rxjs';
import { CategoryData, loginuserDatalist } from './Model/category-data.model';
import { User } from './../../Users/Model/user';
import { Component, OnInit } from '@angular/core';
import { GifListService } from '../GifList/shared/gif-list.service';

@Component({
  selector: 'add-to-category',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {

  categoryData!: CategoryData;
  iscategorychecked: boolean = false;
  categorylist!: string[];
  selectedValue!: string;
  gifLists!: string[];

  constructor() {
  }
  ngOnInit(): void {
    this.categorylist = JSON.parse(localStorage.getItem("Categories") || "{}");

  }
  handleAddCategoryclick() {
    debugger
    (this.selectedValue == '') ? window.alert("Select a category") : this.saveDatatostorage();
  }

  saveDatatostorage() {

    let categoryItems: any[];
    const userId = JSON.parse(localStorage.getItem("LoginedUserDetails") || "{}")[0].uid;

    let userListdata: loginuserDatalist = {
      categoryName: this.selectedValue,
      gifs: this.gifLists
    }
    let allData: CategoryData = {
      usId: userId,
      data: [userListdata]
    }
    console.log(allData)

    if (localStorage.getItem("CategoryList")) {
      categoryItems = JSON.parse(localStorage.getItem("CategoryList") || "{}");
      let existUser = categoryItems.some(data => data.usId == userId)
      if (!existUser) {
        categoryItems = [allData, ...categoryItems];
      }
      else {
        this.checkHascategoryExist(categoryItems, userId).subscribe( subscriber =>{
          subscriber.complete();{
            categoryItems = [subscriber]
          }
          
        })
        
      }

    }
    else {
      categoryItems = [allData];
    }
    localStorage.setItem("CategoryList", JSON.stringify(categoryItems));
    window.alert("added to category")

    

  }

  checkHascategoryExist(existingDataSource: any, userId: string):Observable<any> {

    let LoginedUserData = existingDataSource.find((item: { usId: string }) => { return item.usId === userId })['data']
    let categoryList = LoginedUserData.find((item: { categoryName: string; }) => { return item.categoryName == this.selectedValue })

    if (categoryList?.categoryName === this.selectedValue) {
      this.gifLists?.map((item) => {
        categoryList.gifs?.map((item2: string) => {
          if (item == item2) {
            window.alert(" item already exists..")
            return;
          }
          else if (!categoryList.gifs.includes(item)) {
            categoryList.gifs?.push(item);
          }
        });
      });
    } else {
      let category: loginuserDatalist = {
        categoryName: this.selectedValue,
        gifs: this.gifLists
      }
      LoginedUserData?.push(category);
    }
     return from(existingDataSource);

  }


}
