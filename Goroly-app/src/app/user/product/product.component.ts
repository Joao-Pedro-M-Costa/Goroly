import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/shared_elements/api/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements AfterViewInit {
  produtoimg="assets/Images/camisa.jpg"
  produto;
  produtoform :FormGroup;

  constructor(private api:ApiService, private activeroute:ActivatedRoute) {  
   
    this.dataInit();

   
    }

  ngAfterViewInit(): void {
  

    this.produtoform.patchValue({
      "descricao":this.produto.descricao,
      "expecificacoes":this.produto.expecificacoes,
      "preco":this.produto.preco,
    })

  }

  dataInit(){
    let promise =new Promise((resolve,reject)=>{
      this.api.httpGet(`produto/`+this.activeroute.snapshot.paramMap.get('id')).subscribe(data=>this.produto=data)
      this.produtoform =new FormGroup({
        "descricao":new FormControl(0,Validators.required),
        "expecificacoes":new FormControl(0,Validators.required),
        "preco":new FormControl(-100,Validators.required),
        "amount":new FormControl(0)
      })
      resolve();
    });
    return promise;
  }

  addToCart(){
    console.log(this.produtoform.get("amount").value);
  }

}
