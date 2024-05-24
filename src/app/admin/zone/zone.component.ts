import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {

  data:any = [];
searchText: any;
  constructor(private ad:AdminService) { }

  getZones(){
    this.ad.getZones().subscribe(
      (res:any)=>{
        console.log(res);
        this.data=res;
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }

  deleteZone(id:any){
    //display window.confirm before deleting
    if(window.confirm('Are you sure you want to delete?')){
      this.ad.deleteZone(id).subscribe(
        (res:any)=>{
          console.log(res);
          this.getZones();
        },
        (err:any)=>{
          console.log(err);
        }
      )
    }
  }
 
  ngOnInit(): void {
    this.getZones();
  }

}
