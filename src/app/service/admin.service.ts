import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http:HttpClient) { }

  getGroups(){
    return this.http.get('https://hanaback.onrender.com/groupe')
  }
  //add groute
  addGroup(body:any){
    return this.http.post('https://hanaback.onrender.com/groupe',body)
  }

  getGroupbyId(id: any) {
    return this.http.get('https://hanaback.onrender.com/groupe/'+id)
  }

  updateGroup(id:any,body:any){
    return this.http.put('https://hanaback.onrender.com/groupe/'+id,body)
  }

  deleteGroup(id:any){
    return this.http.delete('https://hanaback.onrender.com/groupe/'+id)
  }

  ////// Zone ///////
  createZone(body:any){
    return this.http.post('https://hanaback.onrender.com/zone',body)
  }

  getZones(){
    return this.http.get('https://hanaback.onrender.com/zone')
  }

  deleteZone(id:any){
    return this.http.delete('https://hanaback.onrender.com/zone/'+id)
  }

  updateZone(id:any,body:any){
    return this.http.put('https://hanaback.onrender.com/zone/'+id,body)
  }

  getZoneById(id:any){
    return this.http.get('https://hanaback.onrender.com/zone/'+id)
  }


  getListUsers(){
    return this.http.get('https://hanaback.onrender.com/user')
  }

  addUsers(body:any){
    return this.http.post('https://hanaback.onrender.com/user/register',body)
  }

  getUserById(id:any){
    return this.http.get('https://hanaback.onrender.com/user/'+id)
  }

  updateUser(id:any,body:any){
    return this.http.put('https://hanaback.onrender.com/user/update/'+id,body)
  }
  regeneratePassword(id:any){
    return this.http.get('https://hanaback.onrender.com/user/regenerate-password/'+id)
  }

  deleteUsers(id:any){
    return this.http.delete('https://hanaback.onrender.com/user/'+id)
  }

}
