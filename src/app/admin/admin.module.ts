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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ScannerComponent } from './scanner/scanner.component';
import { AddusersComponent } from './addusers/addusers.component';
import { ListusersComponent } from './listusers/listusers.component';
import { UpdateusersComponent } from './addusers/updateusers/updateusers.component';


@NgModule({
  declarations: [
    GroupeComponent,
    AddgroupComponent,
    EditgroupeComponent,
    ZoneComponent,
    AddzoneComponent,
    UpdatezoneComponent,
    ScannerComponent,
    AddusersComponent,
    ListusersComponent,
    UpdateusersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule,Ng2SearchPipeModule
  ]
})
export class AdminModule { }
