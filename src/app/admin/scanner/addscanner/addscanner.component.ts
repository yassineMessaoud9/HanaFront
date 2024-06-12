import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-addscanner',
  templateUrl: './addscanner.component.html',
  styleUrls: ['./addscanner.component.css']
})
export class AddscannerComponent implements OnInit {
  appareil = {
    name: '',
    reference: '',
    adressMac: '',
    from: '',
    to: '',
    user: '',
  };
  users: any = [];
  newUsers: any = [];
  gr: any = [];

  constructor(private ad: AdminService, private router: Router) { }

  getUsers() {
    this.ad.getListUsers().subscribe((res) => {
      console.log(res);
      this.users = res;
      this.newUsers = this.users.filter((user: { role: string; }) => user.role === 'LIVREUR' || user.role === 'OPERATEUR');
    });
  }

  getGroupes() {
    this.ad.getGroups().subscribe((res) => {
      console.log(res);
      this.gr = res;
    });
  }

  createScanner() {
    console.log(this.appareil);
    this.ad.addScanner(this.appareil).subscribe((res) => {
      console.log(res);
    this.router.navigate(['/admin/scanners']);
    }, (err) => {
      console.error(err);
      alert('Error creating scanner: ' + err.message);
    });
  }

  ngOnInit(): void {
    this.getUsers();
    this.getGroupes();
  }
}
