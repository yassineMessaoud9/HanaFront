import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-superviseur',
  templateUrl: './superviseur.component.html',
  styleUrls: ['./superviseur.component.css']
})
export class SuperviseurComponent {
  sections:any = {
    dashboard: false,
    status: false,
    history: false,
    alerts: false,
    deliverers: false,
    tasks: false
  };

  databobine:any=[];
  databobinenv:any=[];
  constructor(private ads:AdminService
  ) { }

  getBobines() {
    this.ads.getBobines().subscribe((res) => {
      console.log(res);
      this.databobine = res;
      this.databobinenv = this.databobine.filter((bobine: { user: { role: string; }; }) => bobine.user && bobine.user.role === 'SUPERVISEUR');

      console.log(this.databobine);
    });
  }
  anyScanned(): boolean {
    return this.databobine.some((bobine: { scanned: any; }) => bobine.scanned);
  }
  toggleSection(section: string) {
    this.sections[section] = !this.sections[section];
  }

  ngOnInit(): void {
    this.getBobines()
  }
}
