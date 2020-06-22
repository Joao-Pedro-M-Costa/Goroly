import { AfterViewInit, Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UsuarioDataTableDataSource, UsuarioDataTableItem } from './usuario-data-table-datasource';
import { ApiService } from 'src/app/shared_elements/api/api.service';


@Component({
  selector: 'app-usuario-data-table',
  templateUrl: './usuario-data-table.component.html',
  styleUrls: ['./usuario-data-table.component.css']
})
export class UsuarioDataTableComponent implements AfterViewInit, OnInit {
  @Output() toggleRow=new EventEmitter();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<UsuarioDataTableItem>;
  dataSource: UsuarioDataTableDataSource;
  
  data;
  checkedRow=[];
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select','id', 'name'];

  constructor(private api:ApiService){}
 
  ngOnInit() {
    this.api.httpGet("usuario").subscribe(data=>{
    this.dataSource = new UsuarioDataTableDataSource(data);
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
