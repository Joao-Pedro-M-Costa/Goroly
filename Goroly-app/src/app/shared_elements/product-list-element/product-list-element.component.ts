import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list-element',
  templateUrl: './product-list-element.component.html',
  styleUrls: ['./product-list-element.component.css']
})
export class ProductListElementComponent implements OnInit {
  img="";
  preco=0;
  descricao="teste";
  constructor() { }

  ngOnInit(): void {
  }

}