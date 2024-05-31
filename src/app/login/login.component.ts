import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { jwtDecode } from 'jwt-decode';  // Import jwt-decode
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  testerr: any;
  messageerr: any;
  email: any;
  password: any;
  loading: any;
  currentYear: any;

  constructor(private auth: AuthService, private router:Router) {}

  login() {
    let body = {
      "username": this.email,
      "password": this.password
    }
    this.auth.login(body).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);

        // Decode the JWT to access the user information
        const decodedToken = jwtDecode<{role: string}>(res.token); // Decoding the token
        console.log(decodedToken);

        localStorage.setItem('user', JSON.stringify(res.user));
        if (decodedToken.role === 'ADMIN') { 
          sessionStorage.setItem('role', decodedToken.role);
         this.router.navigate(['/admin']);
        }
      },
      (err: any) => {
        this.testerr = true;
        this.messageerr = err.error.message;
      }
    );
  }
}
