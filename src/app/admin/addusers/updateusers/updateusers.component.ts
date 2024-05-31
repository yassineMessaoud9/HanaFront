import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-updateusers',
  templateUrl: './updateusers.component.html',
  styleUrls: ['./updateusers.component.css']
})
export class UpdateusersComponent {
  user :any= {
    id: '',
    username: '',
    email: '',
    phone: '',
    role: ''
  };
id:any;
inf:any=[]
  constructor(private ad: AdminService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    

  }

  getUser(id: string) {
    this.ad.getUserById(id).subscribe((data) => {
      this.inf = data;
      console.log(this.inf);
      this.user.id = this.id;
      this.user.username = this.inf.username;
      this.user.email = this.inf.email;
      this.user.phone = this.inf.phone;
      this.user.role = this.inf.role;

    });
  }

  updateUser() {
    this.ad.updateUser(this.user.id, this.user).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/admin/users']);
    });
  }
  testing!:boolean;
regeneratePassword(){
  this.ad.regeneratePassword(this.user.id).subscribe((res)=>{
    console.log(res);
    this.testing=true;
  })
}
  ngOnInit(): void {
    this.getUser(this.id);
  }
}

