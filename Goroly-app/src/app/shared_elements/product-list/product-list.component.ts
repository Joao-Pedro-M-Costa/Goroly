import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import {ApiService} from "src/app/shared_elements/api/api.service"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productwanted: String;
  produtos //= [
  //  { id: 0, img: "", descricao: "teste", "preco": 100, },
  //  { "id": 0, "img": "", "descricao": "teste", "preco": 100, },
  //  { "id": 0, "img": "", "descricao": "teste", "preco": 100, },
  //{ "id": 0, "img": "", "descricao": "teste", "preco": 100, },
  //  { "id": 0, "img": "", "descricao": "teste", "preco": 100, },
  //  { "id": 0, "img": "", "descricao": "teste", "preco": 100, },
  //  { "id": 0, "img": "", "descricao": "teste", "preco": 100, },
  //  { "id": 0, "img": "", "descricao": "teste", "preco": 100, },
  //  { "id": 0, "img": "", "descricao": "teste", "preco": 100, },
  //  { "id": 0, "img": "", "descricao": "teste", "preco": 100, },
  //  { "id": 0, "img": "", "descricao": "teste", "preco": 100, },
  //  { "id": 0, "img": "", "descricao": "teste", "preco": 100, },
  //  { "id": 0, "img": "", "descricao": "teste", "preco": 100, },
  //]
  constructor(private router:Router,private api:ApiService ) {
   }

  ngOnInit(): void {
    this.api.httpGet("produto").subscribe(data=>(this.produtos=data));
  }
  
}
