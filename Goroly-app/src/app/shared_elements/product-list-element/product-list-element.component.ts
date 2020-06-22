import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-element',
  templateUrl: './product-list-element.component.html',
  styleUrls: ['./product-list-element.component.css']
})
export class ProductListElementComponent implements OnInit {

  @Input() produto;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 goToProduto(){
  this.router.navigate(["produto",this.produto.id]);

 }
}
