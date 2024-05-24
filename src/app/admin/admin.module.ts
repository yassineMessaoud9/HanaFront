import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GroupeComponent } from './groupe/groupe.component';
import { AddgroupComponent } from './groupe/addgroup/addgroup.component';
import { FormsModule } from '@angular/forms';
import { EditgroupeComponent } from './groupe/editgroupe/editgroupe.component';
import { ZoneComponent } from './zone/zone.component';
import { AddzoneComponent } from './zone/addzone/addzone.component';
import { UpdatezoneComponent } from './zone/updatezone/updatezone.component';


@NgModule({
  declarations: [
    GroupeComponent,
    AddgroupComponent,
    EditgroupeComponent,
    ZoneComponent,
    AddzoneComponent,
    UpdatezoneComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule
  ]
})
export class AdminModule { }
