import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  logo="https://www.fujideia.com.br/fuji/papw/grupo_handsome_siblings_20022020.png";
  constructor() { }

  ngOnInit(): void {
  }

}
