import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiRoot :string ="localhost:8080/api";

  constructor(private http:HttpClient){};
  public httpGet(url){
      let x =this.http.get(`${this.apiRoot}/${url}`);
      return x;
   }
  public httpPost(url,item){
       return this.http.post(`${this.apiRoot}/${url}`,item);
   }
}
