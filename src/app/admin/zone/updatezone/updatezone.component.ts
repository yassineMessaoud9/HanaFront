import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-updatezone',
  templateUrl: './updatezone.component.html',
  styleUrls: ['./updatezone.component.css']
})
export class UpdatezoneComponent {
name: any;
numeroP: any;
Zone: any=[]
id:any
constructor(private adr:AdminService,private ar:ActivatedRoute,private router:Router) {
  this.id=this.ar.snapshot.params['id'];

 }
getZone()
{
  this.adr.getZoneById(this.id).subscribe(
    (res:any)=>{
      console.log(res);
      this.Zone=res;
      this.name=this.Zone.name;
      this.numeroP=this.Zone.numposition;

    },
    (err:any)=>{
      console.log(err);
    }
  )
}

ngOnInit(): void {
  this.getZone();

}
updateZone() {
  let body = {
    "name": this.name,
    "numposition": this.numeroP
  }
  console.log(body);
  this.adr.updateZone(this.id,body).subscribe(ers=>{
    console.log(ers);
    this.router.navigate(['/admin/zones']);

  })
}
}
