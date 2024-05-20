import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {

  constructor(private ss:AdminService) { }

  listGroup:any=[];

  getGroups(){
    this.ss.getGroups().subscribe(
      (res:any)=>{
        console.log(res);
        this.listGroup=res;
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }
  ngOnInit(): void {
    this.getGroups();
  }

}
