import { CheckboxDirective } from './../Shared/Directives/checkbox.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { CategoryListComponent } from './CategoryList/category-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SearchComponent } from './Search/search.component';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home.component';
import { GifListComponent } from './GifList/gif-list.component';
import { FormsModule } from '@angular/forms';
import { CreatecategoryComponent } from './CreateCategory/createcategory.component';
import { SavedcategoriesComponent } from './savedcategories/savedcategories.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';




@NgModule({
  declarations: [
    CategoryListComponent,
    SearchComponent,
    HomeComponent,
    GifListComponent,
    CreatecategoryComponent,
    SavedcategoriesComponent,
    CheckboxDirective,
    AddcategoryComponent
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
