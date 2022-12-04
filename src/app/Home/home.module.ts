import { CheckboxDirective } from './../Shared/Directives/checkbox.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SearchComponent } from './Search/search.component';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { CreatecategoryComponent } from './create-category/createcategory.component';
import { SavedcategoriesComponent } from './savedcategories/savedcategories.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { GifListComponent } from './gif-list/gif-list.component';




@NgModule({
  declarations: [
    CategoryListComponent,
    SearchComponent,
    HomeComponent,
    CreatecategoryComponent,
    SavedcategoriesComponent,
    CheckboxDirective,
    AddcategoryComponent,
    GifListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
  ],
  exports:[
     HomeComponent
  ]
  
})
export class HomeModule { }
