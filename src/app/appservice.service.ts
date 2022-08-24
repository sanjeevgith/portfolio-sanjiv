import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http:HttpClient) { }













  count(){
    return this.http.get("https://api.countapi.xyz/update/mysite/?amount=1");
  }







}
