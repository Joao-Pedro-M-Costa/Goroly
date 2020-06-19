import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/shared_elements/api/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  produtoimg="assets/Images/camisa.jpg"
  produto;
  produtoform :FormGroup;
  constructor(private api:ApiService) {
    this.api.httpGet(`produto/1`).subscribe(data=>this.produto=data)
    
    }

  ngOnInit(): void {
    this.produtoform =new FormGroup({
      "descricao":new FormControl("teste",Validators.required),
      "expecificacoes":new FormControl(0,Validators.required),
      "preco":new FormControl(0,Validators.required),
      "amount":new FormControl(0)

    })
  }

  addToCart(){
    console.log(this.produto)
    console.log(this.produtoform.get("amount").value);
  }

}
