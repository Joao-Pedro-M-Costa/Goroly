import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productwanted: String;
  id=0;
  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }
  goToProduct(){
    this.router.navigate(['product/',this.id]);


  }
}
