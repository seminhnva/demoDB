import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css'],
})
export class ListDataComponent implements OnInit {
  list: any[] = [];
  image = 'https://source.unsplash.com/random/320x320';
  isGridMode = true;

  // table
  public page = 1;
  public pageSize = 10;

  constructor(private _dataSerivce: DataService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this._dataSerivce.getListData().subscribe((data) => {
      this.list = data;
      console.log(this.list)
    });
  }

  // section paginate
}
