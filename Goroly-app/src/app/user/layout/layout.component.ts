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
  logo="assets/Images/Goroly-logo.png";
  userimg="assets/Images/Goroly-logo.png";
  public saldo=0;
  constructor() { }

  ngOnInit(): void {
  }

}
