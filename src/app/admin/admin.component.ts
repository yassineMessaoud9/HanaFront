import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  role: string | null = null;
  att = false;
  data: any = [];

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role');
    if (!this.role) {
      this.router.navigate(['/login']);
    }
    setInterval(()=>{this.getBobines()},1000)

  }

  logout(){
    sessionStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
  getBobines() {
    this.adminService.getBobines().pipe(
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr))
    ).subscribe((res) => {
      console.log(res);
      if (this.data.length > 0 && JSON.stringify(this.data) !== JSON.stringify(res)) {
       
        this.att=true
      }
      this.data = res;
    });
  }}
