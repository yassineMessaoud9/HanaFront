import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-addbobine',
  templateUrl: './addbobine.component.html',
  styleUrls: ['./addbobine.component.css']
})
export class AddbobineComponent implements OnInit {
  bobine = {
    reference: '',
    emplacement: '',
    metrage: '',
    type: '',
    section: '',
    couleur: '',
    dateModification:'',
    user: '',
    machine: ''
  };
  reference: string = '';
  users: any = [];
  newUsers: any = [];
  machines: any = [];

  constructor(private ads: AdminService, private route: Router) {}

  addBobine() {
    this.bobine.reference = this.reference;
    this.ads.addbobine(this.bobine).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/admin/bobines']);
    });
  }

  getUsers() {
    this.ads.getListUsers().subscribe((res) => {
      console.log(res);
      this.users = res;
      this.newUsers = this.users.filter((user: { role: string; }) => user.role === 'LIVREUR' || user.role === 'OPERATEUR');
    });
  }

  getMachines() {
    this.ads.getAppareil().subscribe((res) => {
      console.log(res);
      this.machines = res;
    });
  }

  updateReference() {
    this.reference = 'L' + this.bobine.type + this.bobine.section + this.bobine.couleur;
  }

  ngOnInit(): void {
    this.getUsers();
    this.getMachines();
  }
}
