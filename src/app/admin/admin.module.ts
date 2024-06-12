import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GroupeComponent } from './groupe/groupe.component';
import { AddgroupComponent } from './groupe/addgroup/addgroup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditgroupeComponent } from './groupe/editgroupe/editgroupe.component';
import { ZoneComponent } from './zone/zone.component';
import { AddzoneComponent } from './zone/addzone/addzone.component';
import { UpdatezoneComponent } from './zone/updatezone/updatezone.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ScannerComponent } from './scanner/scanner.component';
import { AddusersComponent } from './addusers/addusers.component';
import { ListusersComponent } from './listusers/listusers.component';
import { UpdateusersComponent } from './addusers/updateusers/updateusers.component';
import { AddscannerComponent } from './scanner/addscanner/addscanner.component';
import { UpdateScannerComponent } from './scanner/update-scanner/update-scanner.component';
import { BobineComponent } from './bobine/bobine.component';
import { AddbobineComponent } from './bobine/addbobine/addbobine.component';
import { UpdateBobineComponent } from './bobine/update-bobine/update-bobine.component';
import { MachineComponent } from './machine/machine.component';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { UpdateMachineComponent } from './update-machine/update-machine.component';
import { LivreurComponent } from './livreur/livreur.component';


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
    AddscannerComponent,
    UpdateScannerComponent,
    BobineComponent,
    AddbobineComponent,
    UpdateBobineComponent,
    MachineComponent,
    AddMachineComponent,
    UpdateMachineComponent,
    LivreurComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule,Ng2SearchPipeModule,ReactiveFormsModule
  ]
})
export class AdminModule { }
