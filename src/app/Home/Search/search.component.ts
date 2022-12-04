import { Component, OnInit } from '@angular/core';
import { GifListService } from '../gif-list/shared/gif-list.service';
@Component({
  selector: 'gif-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
   
  searchTerm : string ="";
  gifDataList !: any;
  constructor(private _giflistService:GifListService) { }

  ngOnInit(): void {

  }
  search() {
    debugger
    if(this.searchTerm !=''){
      this._giflistService.getGif(this.searchTerm).subscribe(response => {
        this.gifDataList = response;
      })
    }else{
      this.gifDataList =[];
    }

    
    }
  
}
