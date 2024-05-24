import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-editgroupe',
  templateUrl: './editgroupe.component.html',
  styleUrls: ['./editgroupe.component.css'],
})
export class EditgroupeComponent {
  name: any;
  numero: any;
  selectedZone: any;
  zone: any;
  GroupeMe: any = [];
  id: any;
  constructor(
    private as: AdminService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.getGroup();
    this.getZone();
  }
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
  getGroup() {
    this.as.getGroupbyId(this.id).subscribe((res: any) => {
      this.GroupeMe = res;
      this.name = this.GroupeMe.name;
      this.numero = this.GroupeMe.numero;
      this.selectedZone = this.GroupeMe.zone;
    });
  }
  Edit() {
    let body = {
      name: this.name,
      numero: this.numero,
      zones: this.selectedZone,
    };
    this.as.updateGroup(this.id, body).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/admin/groups']);
    });
  }
}
