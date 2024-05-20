import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environnement } from 'src/environnement';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(body:any){
    return this.http.post(`${Environnement.BASE_URL}/auth/login`,body)
  }
}
