import { GifListComponent } from './GifList/gif-list.component';
import { CreatecategoryComponent } from './CreateCategory/createcategory.component';
import { AddcategoryComponent } from './AddCategory/addcategory.component';
import { HomeComponent } from './home.component';
import { SearchComponent } from './Search/search.component';
import { CategoryListComponent } from './CategoryList/category-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {path:'',component:HomeComponent,
   children:[
    {path:'giflist',component:GifListComponent },
  ]
  },
  //{path:'categorylist',component:CategoryListComponent },
 //{path:'Search',component:SearchComponent },
  //{path:'addcategory',component:AddcategoryComponent },
  {path:'category',component:CreatecategoryComponent },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
