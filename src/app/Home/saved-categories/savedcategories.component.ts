import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UsersDataService } from '../../Users/Shared/users-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'savedcategories',
  templateUrl: './savedcategories.component.html',
  styleUrls: ['./savedcategories.component.scss']
})
export class SavedcategoriesComponent implements OnInit {

  selectedGifList!: string[]
  selectedCategory!: string;
  constructor(private _userdataservice: UsersDataService, private activeRoute: ActivatedRoute, private _router: Router) { }


  ngOnInit(): void {
    debugger
    this.activeRoute.params.subscribe((params) => {
      console.log(params)
      let categories = [];
      categories = JSON.parse(localStorage.getItem("CategoryList") || "{}");
      let logineduseritem = categories.find((item: { usId: string; }) => { return item.usId === this._userdataservice.loginedUserId }).data
      this.selectedGifList = logineduseritem.find((item: { categoryName: string; }) => { return item.categoryName === params['name'] }).gifs
    })
    
  }
  gotoback() {
    debugger
    this._router.navigateByUrl('home');
  }

}
