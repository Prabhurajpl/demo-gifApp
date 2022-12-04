import { SavedcategoriesComponent } from './saved-categories/savedcategories.component';
import { CreatecategoryComponent } from './create-category/createcategory.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifListComponent } from './gif-list/gif-list.component';

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
