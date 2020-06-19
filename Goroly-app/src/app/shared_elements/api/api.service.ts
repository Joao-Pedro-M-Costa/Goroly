import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { __values } from 'tslib';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiRoot :string ="http://localhost:8080/api";

  constructor(private http:HttpClient){
  };
   httpGet(url){
    return this.http.get(`${this.apiRoot}/${url}`);
      
   }
  public httpPost(url,item){
       return this.http.post(`${this.apiRoot}/${url}`,item).subscribe()
   }
}

