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

  getGroupbyId(id: any) {
    return this.http.get('http://localhost:3005/groupe/'+id)
  }

  updateGroup(id:any,body:any){
    return this.http.put('http://localhost:3005/groupe/'+id,body)
  }

  deleteGroup(id:any){
    return this.http.delete('http://localhost:3005/groupe/'+id)
  }

  ////// Zone ///////
  createZone(body:any){
    return this.http.post('http://localhost:3005/zone',body)
  }

  getZones(){
    return this.http.get('http://localhost:3005/zone')
  }

  deleteZone(id:any){
    return this.http.delete('http://localhost:3005/zone/'+id)
  }

  updateZone(id:any,body:any){
    return this.http.put('http://localhost:3005/zone/'+id,body)
  }

  getZoneById(id:any){
    return this.http.get('http://localhost:3005/zone/'+id)
  }


}
