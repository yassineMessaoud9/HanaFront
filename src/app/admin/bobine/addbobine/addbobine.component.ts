import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-addbobine',
  templateUrl: './addbobine.component.html',
  styleUrls: ['./addbobine.component.css']
})
export class AddbobineComponent {
  bobine = {
    emplacement: '',
    status: '',
    type: '',
    section: '',
    couleur: '',
    user: '',
    machine: ''
  };

  users: any = [];
  newUsers: any = [];
  machines: any = [];
  
  constructor(private ads:AdminService,private route:Router){}
  addBobine() {
    this.ads.addbobine(this.bobine).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/admin/bobines']);
    });
    }
    
    getUsers() {
      this.ads.getListUsers().subscribe((res) => {
        console.log(res);
        this.users = res;
        for(let i=0; i<this.users.length; i++){
          if(this.users[i].role == 'LIVREUR' || this.users[i].role == 'OPERATEUR'){
            this.newUsers.push(this.users[i]);
          }
        }
      });
    }

    getMachines() {
      this.ads.getScanners().subscribe((res) => {
        console.log(res);
        this.machines = res;
      });
    }

    ngOnInit(): void {
      this.getUsers();
      this.getMachines();
    }
}
