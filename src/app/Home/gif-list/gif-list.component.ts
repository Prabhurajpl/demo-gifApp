import { GifListService } from './shared/gif-list.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AddcategoryComponent } from '../addcategory/addcategory.component';

@Component({
  selector: 'gif-list',
  templateUrl: './gif-list.component.html',
  styleUrls: ['./gif-list.component.scss']
})



export class GifListComponent implements OnInit, OnChanges {

  @Input() gifDataList !: any;
  isCategorychecked: boolean = false;
  selectedGifs: string[] = [];
  constructor(private _giflistService: GifListService) { }


  @ViewChild(AddcategoryComponent) addcategoryComponent !: AddcategoryComponent


  dataList!: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.gifDataList?.length == 0) {
      this.addcategoryComponent.iscategorychecked = false;
    }
  }
  ngOnInit(): void {


  }
  itemCheckboxclick(event: any, content: any) {
    const { itemurl:gifUrl } = content;
    if (!this.selectedGifs.includes(gifUrl) && event.target.checked) {
      for (let i = 0; i < this.gifDataList.length; i++) {
        if (this.gifDataList[i].itemurl === gifUrl) {
          this.selectedGifs.push(gifUrl)
        }
      }
    } else {
      const index: number = this.selectedGifs.indexOf(gifUrl);
      if (index !== -1) {
        this.selectedGifs.splice(index, 1);
      }
    }
    this.addcategoryComponent.gifLists = this.selectedGifs;
    (this.selectedGifs.length == 0) ? this.addcategoryComponent.iscategorychecked = false
      : this.addcategoryComponent.iscategorychecked = true


  }


}
