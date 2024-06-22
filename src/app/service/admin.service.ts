import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, retryWhen, delay, tap } from 'rxjs/operators';

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


  getListUsers(){
    return this.http.get('http://localhost:3005/user')
  }

  addUsers(body:any){
    return this.http.post('http://localhost:3005/user/register',body)
  }

  getUserById(id:any){
    return this.http.get('http://localhost:3005/user/'+id)
  }

  updateUser(id:any,body:any){
    return this.http.put('http://localhost:3005/user/update/'+id,body)
  }
  regeneratePassword(id:any){
    return this.http.get('http://localhost:3005/user/regenerate-password/'+id)
  }

  deleteUsers(id:any){
    return this.http.delete('http://localhost:3005/user/'+id)
  }


  getScanners(){
    return this.http.get('http://localhost:3005/scanner')
  }

  addScanner(body:any){
    return this.http.post('http://localhost:3005/scanner',body)
  }

  //get scanner by iduser
  getScannerByIduser(id:any){
    return this.http.get('http://localhost:3005/scanner/userid/'+id)
  }

  associateScannerToUser(body:any){
    return this.http.put('http://localhost:3005/scanner/associate',body)
  }

  deleteScanner(id:any){
    return this.http.delete('http://localhost:3005/scanner/'+id)
  }

  getScannerbyid(id:any){
    return this.http.get('http://localhost:3005/scanner/'+id)
  }

  updateScanner(id:any,body:any){
    return this.http.put('http://localhost:3005/scanner/'+id,body)
  }

  ///////// BOBINE ///////

  addbobine(body:any){
    return this.http.post('http://localhost:3005/bobine',body)
  }
  getBobines(){
    return this.http.get('http://localhost:3005/bobine')
  }
  getBobineById(id:any){
    return this.http.get('http://localhost:3005/bobine/'+id)
  }

  updateBobine(id:any,body:any){
    return this.http.put('http://localhost:3005/bobine/'+id,body)
  }
  deleteBobine(id:any){
    return this.http.delete('http://localhost:3005/bobine/'+id)
  }



  ////// APPAREIL //////

  createAppareil(body:any){
    return this.http.post('http://localhost:3005/appareil',body)
  }
  getAppareil(){
    return this.http.get('http://localhost:3005/appareil')
  }
}
function distinctUntilChanged(arg0: (prev: any, curr: any) => boolean): import("rxjs").OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
}

