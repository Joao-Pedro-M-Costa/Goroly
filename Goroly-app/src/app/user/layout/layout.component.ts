//*******/
//the overlaying layout from the user side
//
//*******/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  logo="https://www.fujideia.com.br/fuji/papw/grupo_handsome_siblings_20022020.png";
  userimg="https://www.fujideia.com.br/fuji/papw/grupo_handsome_siblings_20022020.png";
  public saldo=0;
  constructor() { }

  ngOnInit(): void {
  }

}
