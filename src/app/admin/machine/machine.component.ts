import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent {
deleteAppareil(arg0: any) {
throw new Error('Method not implemented.');
}

  machine: any = [];
searchQuery!: string;

  constructor( private ads:AdminService) { }

  getMachines() {
    this.ads.getAppareil().subscribe((res) => {
      console.log(res);
      this.machine = res;
    });
  }

  ngOnInit(): void {
    this.getMachines();
  }
}
