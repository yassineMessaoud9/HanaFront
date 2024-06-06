import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-update-bobine',
  templateUrl: './update-bobine.component.html',
  styleUrls: ['./update-bobine.component.css']
})
export class UpdateBobineComponent {

  data: any = [];
  id:any;
  users: any = [];
  newUsers: any = [];
  machines: any = [];
  bobine = {
    emplacement: '',
    status: '',
    type: '',
    section: '',
    couleur: '',
    user: '',
    machine: ''
  };

  constructor(private router:ActivatedRoute, private ads:AdminService, private rd:Router) {
    this.id = this.router.snapshot.params['id'];
   }

  getBobine(){
    this.ads.getBobineById(this.id).subscribe((res)=>{
      console.log(res); 
      this.data = res;
      this.bobine.emplacement = this.data.emplacement;
      this.bobine.status = this.data.status;
      this.bobine.type = this.data.type;
      this.bobine.section = this.data.section;
      this.bobine.couleur = this.data.couleur;
      this.bobine.user = this.data.user;
      this.bobine.machine = this.data.machine;
      
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
  updateBobine(){
    this.ads.updateBobine(this.id, this.bobine).subscribe((res)=>{
      console.log(res);
      this.rd.navigate(['/admin/bobines']);
    });
  }

  ngOnInit(): void {
    this.getBobine();
    this.getUsers();
    this.getMachines();
  }

}
