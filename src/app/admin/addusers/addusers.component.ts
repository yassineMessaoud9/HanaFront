import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent {
  user = {
    username: '',
    email: '',

    phone: '',
    role: ''
  };
constructor(private ad:AdminService, private router:Router) { }

addUser(){
  this.ad.addUsers(this.user).subscribe((res)=>{
    console.log(res);
    this.router.navigate(['/admin/users']);

  })}
}
