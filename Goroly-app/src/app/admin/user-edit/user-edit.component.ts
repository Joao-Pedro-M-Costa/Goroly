import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormsModule, FormGroup, ControlContainer, FormControl, Validators} from '@angular/forms'
import { ApiService } from 'src/app/shared_elements/api/api.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
  export class UserEditComponent implements AfterViewInit {
    
    imguser="assets/Images/anon_male.jpg";
    
    
    //temporary should be pulled from user
    pronouns="they/them";
  //*********** */
    //forms editor controlers
    form1controler=false;
    form2controler=false;
    form3controler=false;
    //***************** */
  
    form:FormGroup;
    formConta:FormGroup;
    saldo=0;
    usuario;
    //contructor makes and sets values for forms,W.I.P is to set values from databank...after i get one running T-T
    constructor(private api:ApiService,private ativeRoute:ActivatedRoute) {
      this.dataInit();
     


         
    this.formConta=new FormGroup({
        "conta1":new FormControl("teste",Validators.required),
        "conta2":new FormControl(null),
        "conta3":new FormControl(null)
    })
  
    }
  
    ngAfterViewInit(): void {
      this.dataPopulate();
    }

    dataInit() {
      this.api.httpGet(`usuario/${this.ativeRoute.snapshot.params.id}`).subscribe((data)=>this.usuario=data)
        this.form=new FormGroup({
          "id":new FormControl(null),
          "cpf":new FormControl(null,Validators.required),
          "nome":new FormControl(null,Validators.required),
          "sobrenome":new FormControl(null,Validators.required),
          "nacionalidade":new FormControl(null,Validators.required),
          "datanascimento":new FormControl(null,Validators.required),
          "fusohorario":new FormControl(null,Validators.required),
          "idioma":new FormControl(null,Validators.required),
          "telefone1":new FormControl(null,Validators.required),
          "telefone2":new FormControl(null),
          "email":new FormControl(null,Validators.required),
          "email1":new FormControl(null),
          "saldo":new FormControl(null),
          "endereco":new FormGroup({
            "nomerua":new FormControl(null,Validators.required),
            "bairro":new FormControl(null,Validators.required),
            "cidade":new FormControl(null,Validators.required),
            "estado":new FormControl(null,Validators.required),
            "cep":new FormControl(null,Validators.required),
          })
        })
    }
    dataPopulate(){
      this.form.patchValue({
        id:this.usuario.id as string,
        cpf:this.usuario.cpf as string,
        nome:this.usuario.nome,
        sobrenome:this.usuario.sobrenome,
        nacionalidade:this.usuario.nacionalidade,
        datanascimento:this.usuario.datanascimento,
        fusohorario:this.usuario.fusohorario,
        idioma:this.usuario.idioma,
        telefone1:this.usuario.telefone1,
        telefone2:this.usuario.telefone2,
        email1:this.usuario.email,
        email2:this.usuario.email1,
        saldo:this.usuario.saldo,
        })
      this.saldo=this.usuario.saldo;
  }
    Gravar(){
      console.log(this.form.value);
      this.api.httpUpdate("usuario",this.form.value);

    }
    logUsuario(){
      console.log(this.usuario);
      
    }
  
  }
  