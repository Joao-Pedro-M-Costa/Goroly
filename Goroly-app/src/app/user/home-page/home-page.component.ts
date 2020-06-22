import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  promotions="Promotions";

  produtos=[{
    img:"https://www.fujideia.com.br/fuji/papw/grupo_handsome_siblings_20022020.png",
    preco:100,
    descricao:"teste1",
    id:"",
  },
  {    
    img:"",
    preco:100,
    descricao:"teste2",
    id:0,
  },
  {
  img:"",
  preco:100,
  descricao:"teste3",
  id:0,
  },
  {
  img:"",
  preco:100,
  descricao:"teste4",
  id:0,
  },
  ]
  teste={};

  constructor() { }

  ngOnInit(): void {}
  
  addition(x){
    return x+1;

  }

}
