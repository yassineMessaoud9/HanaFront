// groupe.component.ts
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {
  searchText: any;
  listGroup: any = [];

  constructor(private ss: AdminService) { }

  getGroups() {
    this.ss.getGroups().subscribe(
      (res: any) => {
        this.listGroup = res.map((group: { zone: any[]; }) => ({
          ...group,
          zoneNames: group.zone && Array.isArray(group.zone) ? group.zone.map(z => z.name).join(', ') : 'No zones'
        }));
        console.log(this.listGroup);
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  deleteGroup(id: any) {
    if (confirm('Are you sure you want to delete this group?')) {
      this.ss.deleteGroup(id).subscribe(
        (res: any) => {
          console.log(res);
          this.getGroups(); // Refresh the list after deletion
        },
        (err: any) => {
          console.log(err);
        }
      )
    }
  }

  ngOnInit(): void {
    this.getGroups();
  }
}
