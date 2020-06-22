import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormControl} from '@angular/forms'
import {Router} from '@angular/router'
import { ApiService } from '../shared_elements/api/api.service';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {
  formulario :FormGroup;
  logo="assets/Images/Goroly-logo.png";


  constructor( private router:Router,private api:ApiService) { 
    this.formulario=new FormGroup({
      "nomeUsuario":new FormControl(null,Validators.required),
      "senha":new FormControl(null,Validators.required)
    })
  }

  ngOnInit(): void {
    for (var i=0; i<50;i++)
      this.api.httpPost("produto",{"name":"name"+i as string,"descricao":"default descricao"+i as String,"expecificacoes":"default expecificacoes"+i,"preco":100+i, });
    
    for (var i=0; i<50;i++){
      let endereco= [{"nomerua":"bobos","bairro":"esmero","cidade":"teste",
      "estado":"teste","CEP":"12345"}];
      this.api.httpPost("usuario",{"cpf":"10","saldo":10,"username":"teste","password":"teste",
        "email":"email@email","telefone1":"1234","telefone2":"1234","nome":"teste"+i as string,
        "sobrenome":"teste", "nacionalidade":"br","fusohorario":"00:00","idioma":"pt",
        "datanascimento":"01/02/1234",
          "endereco":[endereco]});
    }
  }
  //command for form button
  onSubmit():void{
    let dados=`
    nomeUsuario:${this.formulario.value.nomeUsuario}
    senha:${this.formulario.value.senha};
    `
    //**autentication and sorting from admin and user
    
    
    //**redirection to apropriate area
    
    //temporary log
    //temporart redirect to area
    this.router.navigate(['home']);
  }

}