import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css'],
})
export class AddgroupComponent {
  name: any;
  numero: any;
  zone: any = [];
selectedZone: any;
  constructor(private as: AdminService, private router: Router) {}

  getZone() {
    this.as.getZones().subscribe(
      (res: any) => {
        console.log(res);
        this.zone = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  
  }

  ngOnInit(): void {
    this.getZone();
  }
  onSubmit() {
    let body = {
      name: this.name,
      numero: this.numero,
      zone: this.selectedZone,
    };
    console.log(body);
    this.as.addGroup(body).subscribe((ers) => {
      console.log(ers);
      this.router.navigate(['/admin/groups']);
    });
  }
}
