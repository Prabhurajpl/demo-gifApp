import { CategoriesModel } from './Model/categories.model';
import { Observable, from, map, of } from 'rxjs';
import { CategoryData, loginuserDatalist } from './Model/category-data.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-to-category',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {

  categoryData!: CategoryData;
  iscategorychecked: boolean = false;
  // categorylist!: string[];
  selectedValue: string = '';
  gifLists!: string[];
  iscategoryitemexists: boolean = false;
  datasource: any;
  categorylist!: Array<CategoriesModel>
  constructor() {

  }
  ngOnInit(): void {
    debugger
    this.categorylist = JSON.parse(localStorage.getItem("Categories") || "{}");

  }
  handleAddCategoryclick() {
    debugger
    (this.selectedValue == '') ? window.alert("Select a category") : this.saveDatatostorage();
  }

  saveDatatostorage() {
    debugger
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

    if (localStorage.getItem("CategoryList")) {
      categoryItems = JSON.parse(localStorage.getItem("CategoryList") || "{}");
      let existUser = categoryItems.some(data => data.usId == userId)
      if (!existUser) {
        categoryItems = [allData, ...categoryItems];
      }
      else {
        const is_exist = this.hasItemexists(categoryItems, userId)
        if (is_exist) {
          this.iscategoryitemexists = false;
          window.alert("Duplicate Item, already in the category")
          return
        }
        else {
            categoryItems = this.addItemtoexistingdatasource(categoryItems, userId)
        }
      }
      localStorage.setItem("CategoryList", JSON.stringify(categoryItems));
      window.alert("added to category..")

    }
    else {
      categoryItems = [allData];
      localStorage.setItem("CategoryList", JSON.stringify(categoryItems));
      window.alert("added to category..")
    }
  }

  hasItemexists(existingDataSource: any, userId: string) {
    debugger
    let LoginedUserData = existingDataSource.find((item: { usId: string }) => { return item.usId === userId })['data']
    let categoryList = LoginedUserData.find((item: { categoryName: string; }) => { return item.categoryName == this.selectedValue })

    if (categoryList?.categoryName === this.selectedValue) {
      this.gifLists.every((curElement) => {
        if (categoryList.gifs.indexOf(curElement) > -1) {
          this.iscategoryitemexists = true;
        }
      })
    }
    return this.iscategoryitemexists;
  }

  addItemtoexistingdatasource(existingDataSource: any, userId: string) {
    let LoginedUserData = existingDataSource.find((item: { usId: string }) => { return item.usId === userId })['data']
    let categoryList = LoginedUserData.find((item: { categoryName: string; }) => { return item.categoryName == this.selectedValue })
    if (categoryList?.categoryName === this.selectedValue) {
      this.gifLists.every((curElement) => {
        if (categoryList.gifs.indexOf(curElement) == -1) {
          categoryList.gifs?.push(curElement);
        }
      })
    }
    else {
      let category: loginuserDatalist = {
        categoryName: this.selectedValue,
        gifs: this.gifLists
      }
      LoginedUserData?.push(category);

    }
    return existingDataSource;
  }





}
