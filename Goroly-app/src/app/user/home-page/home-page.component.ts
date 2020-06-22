import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared_elements/api/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  recommended="Recommended";
  promotions="Promotions";
  constructor(private api:ApiService ) {}

  ngOnInit(): void {
    
    
    
    
  
  }

  

}
