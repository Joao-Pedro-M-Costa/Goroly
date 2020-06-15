import { Component, OnInit } from '@angular/core';
import {FormsModule, FormGroup, ControlContainer, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  imguser="https://www.fujideia.com.br/fuji/papw/grupo_handsome_siblings_20022020.png";
  
  
  //temporary should be pulled from user
  pronouns="they/them";
  saldo=0;
//*********** */
  //forms editor controlers
  form1controler=false;
  form2controler=false;
  form3controler=false;
  //***************** */

  form1:FormGroup;
  form2:FormGroup;
  form3:FormGroup;

  //contructor makes and sets values for forms,W.I.P is to set values from databank...after i get one running T-T
  constructor() { 
    this.form1=new FormGroup({
      "idusuario":new FormControl(null,Validators.required),
      "CPF":new FormControl(null,Validators.required),
      "nome":new FormControl(null,Validators.required),
      "sobrenome":new FormControl(null,Validators.required),
      "nacionalidade":new FormControl(null,Validators.required),
      "datanascimento":new FormControl(null,Validators.required),
      "fusohorario":new FormControl(null,Validators.required),
      "idioma":new FormControl(null,Validators.required)
    }
    )
    this.form1.setValue({      
    idusuario:"teste",
    CPF:"teste",
    nome:"teste",
    sobrenome:"teste",
    nacionalidade:"teste",
    datanascimento:"teste",
    fusohorario:"teste",
    idioma:"teste",
  })

  this.form2=new FormGroup({
      "conta1":new FormControl(null,Validators.required),
      "conta2":new FormControl(null),
      "conta3":new FormControl(null)
  })
this.form2.patchValue({
  conta1:"teste"

})


  this.form3=new FormGroup({
    "telefone1":new FormControl(null,Validators.required),
    "telefone2":new FormControl(null),
    "email1":new FormControl(null,Validators.required),
    "email2":new FormControl(null),
    "nomerua":new FormControl(null,Validators.required),
    "bairro":new FormControl(null,Validators.required),
    "cidade":new FormControl(null,Validators.required),
    "estado":new FormControl(null,Validators.required),
    "CEP":new FormControl(null,Validators.required),
  })
  this.form3.setValue({      
   telefone1:"teste",
    telefone2:"",
    email1:"teste",
    email2:"",
    nomerua:"teste",
    bairro:"teste",
    cidade:"teste",
    estado:"teste",
    CEP:"teste",
  })
  


  }

  ngOnInit(): void {
  }
  openForm1ToEdit(){

    this.form1controler=!this.form1controler;
   
  }
  openForm2ToEdit(){
    this.form2controler=!this.form2controler;
  }
  openForm3ToEdit(){
    this.form3controler=!this.form3controler;
   }

}
