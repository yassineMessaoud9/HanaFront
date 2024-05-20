import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getGroups(){
    return this.http.get('http://localhost:3005/groupe')
  }
  //add groute
  addGroup(body:any){
    return this.http.post('http://localhost:3005/groupe',body)
  }

}
