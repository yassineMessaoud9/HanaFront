import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent {

deleteScanner(id: any) {

  if(window.confirm('Are you sure you want to delete?')){
    this.ads.deleteScanner(id).subscribe(
      (res:any)=>{
        console.log(res);
        this.getScanners();
      },
      (err:any)=>{
        console.log(err);
      }
    )
  
  }
}


  scanner: any = [];
scanData: any;

  constructor(private ads:AdminService) { }

  getScanners() {
    // Implement the function to get scanners
    this.ads.getScanners().subscribe((res) => {
      console.log(res);
      this.scanner = res;
    });
  }

  ngOnInit(): void {
    this.getScanners();
  }
}
