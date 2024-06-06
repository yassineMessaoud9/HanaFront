import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-bobine',
  templateUrl: './bobine.component.html',
  styleUrls: ['./bobine.component.css']
})
export class BobineComponent {
deleteBobine(arg0: any) {
console.log(arg0);
  if(window.confirm('Are you sure you want to delete?')){
    this.ads.deleteBobine(arg0).subscribe(
      (res:any)=>{
        console.log(res);
        this.getBobines();
      },
      (err:any)=>{
        console.log(err);
      }
    )
  
  }
}
scanData: any;
data: any=[];


  constructor(private ads:AdminService) { }

  getBobines() {
    // Implement the function to get bobines
    this.ads.getBobines().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }

  ngOnInit(): void {
    this.getBobines();
  }
}
