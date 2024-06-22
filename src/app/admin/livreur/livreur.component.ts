import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent {
  databobine:any=[];
  databobinenv:any=[];
  constructor(private ads:AdminService
  ) { }

  getBobines() {
    this.ads.getBobines().subscribe((res) => {
      console.log(res);
      this.databobine = res;
    
    //get the user  object from bobine and filter the user with role LIVREUR
    this.databobinenv = this.databobine.filter((bobine: { user: { role: string; }; }) => bobine.user && bobine.user.role === 'LIVREUR');

    console.log(this.databobine);

    });
  }
  anyScanned(): boolean {
    return this.databobine.some((bobine: { scanned: any; }) => bobine.scanned);
  }
 ngOnInit(): void {
    this.getBobines()
  }
}
