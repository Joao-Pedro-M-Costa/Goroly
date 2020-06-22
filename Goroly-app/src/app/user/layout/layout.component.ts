//*******/
//the overlaying layout from the user side
//
//*******/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  logo="assets/Images/Goroly-logo.png";
  userimg="assets/Images/anon_male.jpg";
  public saldo=0;
  constructor(private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  fetch
}
