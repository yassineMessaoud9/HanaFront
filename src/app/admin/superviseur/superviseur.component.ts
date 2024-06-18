import { Component } from '@angular/core';

@Component({
  selector: 'app-superviseur',
  templateUrl: './superviseur.component.html',
  styleUrls: ['./superviseur.component.css']
})
export class SuperviseurComponent {
  sections:any = {
    dashboard: false,
    status: false,
    history: false,
    alerts: false,
    deliverers: false,
    tasks: false
  };

  toggleSection(section: string) {
    this.sections[section] = !this.sections[section];
  }
}
