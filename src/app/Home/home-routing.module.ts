import { SavedcategoriesComponent } from './savedcategories/savedcategories.component';
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
  {path:'category',component:CreatecategoryComponent },
  {path:'savedcategories/:name',component:SavedcategoriesComponent}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
