import { AfterViewInit, Component, OnInit, ViewChild, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProdutoDataTableDataSource, ProdutoDataTableItem } from './produto-data-table-datasource';

import { EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/shared_elements/api/api.service';

@Component({
  selector: 'app-produto-data-table',
  templateUrl: './produto-data-table.component.html',
  styleUrls: ['./produto-data-table.component.css']
})
export class ProdutoDataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ProdutoDataTableItem>;
  dataSource: ProdutoDataTableDataSource;
  data;
  
  checkedRow=[];
  @Output() toggleRow=new EventEmitter();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select','id', 'name'];

  constructor(private api:ApiService){}

  ngOnInit() {
    this.api.httpGet("produto").subscribe(data=>{
      this.dataSource = new ProdutoDataTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })
  }

  ngAfterViewInit() {
   
  }
  checkRow(id){
    if(this.checkedRow.includes(id)){
      this.checkedRow.splice((this.checkedRow.indexOf(id)),1)
    }else
      this.checkedRow.push(id);
    this.toggleRow.emit(this.checkedRow);
  }


  


}
