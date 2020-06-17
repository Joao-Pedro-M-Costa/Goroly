import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  produtoimg="https://www.fujideia.com.br/fuji/papw/grupo_handsome_siblings_20022020.png"
  preco;
  amount:Number
  produtoform :FormGroup;
  constructor() {
    this.produtoform =new FormGroup({
      "descricao":new FormControl("teste",Validators.required),
      "expecificacoes":new FormControl("1111",Validators.required),
      "preco":new FormControl(100,Validators.required)

    }
    
    )
    this.preco=this.produtoform.get('preco').value

  }

  ngOnInit(): void {
  }

  addToCart(){

    console.log(this.amount);
  }

}
