import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/shared_elements/api/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-side-options',
  templateUrl: './admin-side-options.component.html',
  styleUrls: ['./admin-side-options.component.css']
})
export class AdminSideOptionsComponent implements OnInit {
  @Input() categoria;
  @Input() id=[];
  constructor(private api : ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  //botoes para usuario
  addUser(id){
    this.router.navigate([`admin/user-edit/${id}`]);
  }
  removeUser(id){
    new Promise((resolve,reject)=>{
      for(var i of id)
        this.api.httpDeleteById("usuario",i);
        resolve(window.location.reload());
        reject(Error);
    })
  }
//***************** */

//botoes para produtos
  addProduto(id){
    this.router.navigate([`admin/produto-edit/${id}`]);
  }
  removeProduto(id){
    new Promise((resolve,reject)=>{
      for(var i of id)
        this.api.httpDeleteById("produto",i);
      
        resolve(window.location.reload());
      reject(Error);
      })
  }
  //*********** */
}
