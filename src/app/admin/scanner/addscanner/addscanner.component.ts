import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-addscanner',
  templateUrl: './addscanner.component.html',
  styleUrls: ['./addscanner.component.css']
})
export class AddscannerComponent {
  appareil = {
    reference: '',
    number: '',
    adresseMac: '',
    from: '',
    to: '',
    user: '', // Assuming user is an ID string
    groupe: '' // Assuming groupe is an ID string
  };
  users: any = [];
  newUsers: any = [];
  gr: any = [];
constructor(private ad:AdminService, private router:Router) { }

getUsers() {
    // Implement the function to get users
    this.ad.getListUsers().subscribe((res) => {
      console.log(res);
      this.users = res;
      //loop the this.users to make this.newUsers take the roles livreur or operateur
      for(let i=0; i<this.users.length; i++){
        if(this.users[i].role == 'LIVREUR' || this.users[i].role == 'OPERATEUR'){
          this.newUsers.push(this.users[i]);
        }
      }
    
    });
  
}

getGroupes() {
    // Implement the function to get groupes
    this.ad.getGroups().subscribe((res) => {
      console.log(res);
      this.gr = res;
    });
  
}
  createScanner() {
    // Implement the function to handle form submission
    this.ad.addScanner(this.appareil).subscribe((res) => {
      console.log(res);
    });
    console.log(this.appareil);
    this.router.navigate(['/admin/scanners']);

  }

  ngOnInit(): void {
    this.getUsers();
    this.getGroupes();  
  }
}
