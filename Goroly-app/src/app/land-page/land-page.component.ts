import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormControl} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {
  formulario :FormGroup;
  logo="assets/Images/Goroly-logo.png";


  constructor( private router:Router) { 
    this.formulario=new FormGroup({
      "nomeUsuario":new FormControl(null,Validators.required),
      "senha":new FormControl(null,Validators.required)
    })
  }

  ngOnInit(): void {
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