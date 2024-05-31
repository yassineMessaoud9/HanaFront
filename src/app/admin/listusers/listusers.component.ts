import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent {
  searchText = "";
  data: any = [];
  filteredData: any = [];
role:any;
  constructor(private ad: AdminService) {}

  ngOnInit(): void {
      this.getAllUsers();
      this.role=sessionStorage.getItem('role');
  }

  getAllUsers(): void {
      this.ad.getListUsers().subscribe((res) => {
          this.data = res;
          this.filteredData = res;  // Initially, filtered data is the same as the complete list
          console.log(this.data);
      });
  }
  deleteuser(id:any){
    if(window.confirm('Are you sure you want to delete?')){
      this.ad.deleteUsers(id).subscribe(
        (res:any)=>{
          console.log(res);
          this.getAllUsers();
        },
        (err:any)=>{
          console.log(err);
        }
      )
    }
  
  }

  filterByRole(role: string): void {
      this.filteredData = this.data.filter((user: any) => user.role.toUpperCase() === role);
  }

}
