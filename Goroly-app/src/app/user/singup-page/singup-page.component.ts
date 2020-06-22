import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/shared_elements/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup-page',
  templateUrl: './singup-page.component.html',
  styleUrls: ['./singup-page.component.css']
})
export class SingupPageComponent implements OnInit {
  singupform:FormGroup
  passwordmatch=false;

  constructor(private api:ApiService,private router:Router) { 
    this.singupform= new FormGroup({

      "username":new FormControl(null,Validators.required),
      "password":new FormControl(null,Validators.required),
      "repassword":new FormControl(null,Validators.required),
      "email":new FormControl(null,Validators.compose([Validators.required,Validators.email])),
      "telefone1":new FormControl(null,Validators.compose([Validators.required,Validators.pattern('[0-9]{5}[0-9]{4}')])),
      "telefone2":new FormControl(null,Validators.pattern('[0-9]{5}[0-9]{4}')),
        "endereco": new FormGroup({
          "nomerua":new FormControl(null,Validators.required),
          "bairro": new FormControl(null,Validators.required),
          "cidade":new FormControl(null,Validators.required),
          "estado":new FormControl(null,Validators.required),
          "cep":new FormControl(null,Validators.required)
        }),
      "cpf":new FormControl(null,Validators.required),
      "nome":new FormControl(null,Validators.required),
      "sobrenome":new FormControl(null,Validators.required),
      "nacionalidade": new FormControl(null,Validators.required),
      "fusohorario": new FormControl('0000',Validators.required),
      "idioma": new FormControl('br',Validators.required),
      "datanascimento": new FormControl(null,Validators.required)

    })
  }

  fusoHorarioChangeHandler(evt:any){
    this.singupform.patchValue({'fusohorario' : evt.target.value});

  }

  idiomaChangeHandler(evt:any){
    this.singupform.patchValue({'idioma' : evt.target.value})
  }
  passwordChangeHandler(evt: any){
    if(evt.target.name=='password'){
      if(evt.target.value==this.singupform.get('repassword').value as string)
        this.passwordmatch=true;
      else
        this.passwordmatch=false;
    }
    if(evt.target.name=='repassword'){
      if(evt.target.value==this.singupform.get('password').value as string)
        this.passwordmatch=true;
        else
        this.passwordmatch=false;
    }


  }
  controlNames(form:FormGroup){
    var x=[];
    x.pop;
    for( var i in form.controls){
      x.push(i as String);
    };
    return x;
  }

  finalizar(){
    console.log(this.singupform.value);
    this.api.httpPost("usuario",this.singupform.value);
    this.router.navigate(["home"]);
 
  }

  ngOnInit(): void {
  }

}
