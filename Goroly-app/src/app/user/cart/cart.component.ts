import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { newArray } from '@angular/compiler/src/util';
import { ArgumentOutOfRangeError } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  x;//this is a 'calculation variable' just for math purposes

//product info on display
  src;
  product:FormGroup;

//************** */
//cart info
  cart: FormGroup;
  produtos:FormArray;
  prodDisplay:FormGroup;
  totalpay;
  //************** */

  constructor(private fb:FormBuilder){
    this.product = new FormGroup({
      "name": new FormControl('teste',Validators.required),
      "img": new FormControl('',Validators.required),
      "description":new FormControl('teste teste tes',Validators.required),
      "amount":new FormControl(3,Validators.required)

    })
  }
  ngOnInit(): void {
    this.cart = this.fb.group({
      produtos:this.fb.array([
        this.createProduto()
      ])

    });
  }
  createProduto(){
    return this.fb.group({
      name:'',
      price:0,
      amount:0


    });
  }
  addProduto():void{
    this.produtos=this.cart.get('produtos') as FormArray;
    this.produtos.push(this.createProduto());
  }
  teste(){
    
    console.log(this.cart.get('produtos').value as FormArray);
    this.addProduto();
  }
  totalpaycalculation(){
    this.totalpay=0;
    for( this.x in this.cart.get('produtos').value as FormArray)
      this.totalpay=this.totalpay

  }
}
