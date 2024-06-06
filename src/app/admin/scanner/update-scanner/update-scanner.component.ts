import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-update-scanner',
  templateUrl: './update-scanner.component.html',
  styleUrls: ['./update-scanner.component.css']
})
export class UpdateScannerComponent implements OnInit {
  appareil = {
    reference: '',
    number: '',
    adresseMac: '',
    from: '',
    to: '',
    user: '',
    groupe: ''
  };

  users: any = [];
  newUsers: any = [];
  gr: any = [];
  id: any;
  scanner: any = [];

  constructor(private router: ActivatedRoute, private ads: AdminService, private route:Router) {
    this.id = this.router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getScannerById();
    this.getUsers();
    this.getGroupes();
  }

  getScannerById() {
    this.ads.getScannerbyid(this.id).subscribe((res) => {
      console.log(res);
      this.scanner = res;
      this.appareil.reference = this.scanner.reference;
      this.appareil.number = this.scanner.number;
      this.appareil.adresseMac = this.scanner.adresseMac;
      this.appareil.from = this.formatDate(this.scanner.from);
      this.appareil.to = this.formatDate(this.scanner.to);
      this.appareil.user = this.scanner.user;
      this.appareil.groupe = this.scanner.groupe;
    });
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toISOString().slice(0, 16);
  }

  getUsers() {
    this.ads.getListUsers().subscribe((res) => {
      this.users = res;
      this.newUsers = this.users.filter((user: { role: string; }) => user.role === 'LIVREUR' || user.role === 'OPERATEUR');
    });
  }

  getGroupes() {
    this.ads.getGroups().subscribe((res) => {
      this.gr = res;
    });
  }

  updateScanners() {
    this.ads.updateScanner(this.id, this.appareil).subscribe((res) => {
      console.log(res);

      this.route.navigate(['/admin/scanners']);
    });
    console.log("Updated data:", this.appareil);
  }
}
