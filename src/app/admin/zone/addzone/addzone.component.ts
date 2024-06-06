import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-addzone',
  templateUrl: './addzone.component.html',
  styleUrls: ['./addzone.component.css']
})
export class AddzoneComponent implements OnInit{
name: any;
numeroP: any;


constructor(private as:AdminService, private router:Router) { }
  ngOnInit(): void {
  }
  addZone() {
    let body = {
      "name": this.name,
      "numPosition": this.numeroP
    }
    console.log(body);
    this.as.createZone(body).subscribe(ers=>{
      console.log(ers);
      this.router.navigate(['/admin/zones']);
    })
  }

}
