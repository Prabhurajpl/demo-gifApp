import { SavedcategoriesComponent } from './savedcategories/savedcategories.component';
import { GifListComponent } from './GifList/gif-list.component';
import { CreatecategoryComponent } from './CreateCategory/createcategory.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
