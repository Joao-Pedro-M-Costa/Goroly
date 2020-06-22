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
  public httpGet(url){
    return this.http.get(`${this.apiRoot}/${url}`);
  }
  public httpGetById(url,id){
    return this.http.get(`${this.apiRoot}/${url}/${id}`)
  }
  public httpPost(url,item){
       return this.http.post(`${this.apiRoot}/${url}`,item).subscribe();
  }
  public httpDeleteById(url,id){
    return this.http.delete(`${this.apiRoot}/${url}/${id}`).subscribe();
  }
  public httpUpdate(url,item){
    return this.http.put(`${this.apiRoot}/${url}`,item).subscribe();
  }
}

