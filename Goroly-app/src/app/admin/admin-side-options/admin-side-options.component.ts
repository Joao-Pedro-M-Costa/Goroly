import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-side-options',
  templateUrl: './admin-side-options.component.html',
  styleUrls: ['./admin-side-options.component.css']
})
export class AdminSideOptionsComponent implements OnInit {
  @Input() categoria="Produtos"
  @Input() id=[];
  constructor() { }

  ngOnInit(): void {
  }

  //botoes para usuario
  addUser(id){
    console.log(id)
  }
  removeUser(id){
    console.log(id)
  }
//***************** */

//botoes para produtos
  addProduto(id){
    console.log(id)
  }
  removeProduto(id){
    console.log(id)
  }
  //*********** */
}
