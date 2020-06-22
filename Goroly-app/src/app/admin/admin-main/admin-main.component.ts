import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ProdutoDataTableComponent } from '../produto-data-table/produto-data-table.component';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {
  id=[];
  currentTab="Produtos";

  constructor() { }
  ngOnInit(): void {
   
  }



  changeTab(evt:MatTabChangeEvent){
    this.currentTab=(evt.tab.textLabel);
    this.id=[];
  }
  toggleRow(evt:any){
    this.id=evt
  }
  

}
