import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GroupeComponent } from './groupe/groupe.component';
import { AddgroupComponent } from './groupe/addgroup/addgroup.component';
import { EditgroupeComponent } from './groupe/editgroupe/editgroupe.component';
import { AddzoneComponent } from './zone/addzone/addzone.component';
import { ZoneComponent } from './zone/zone.component';
import { UpdatezoneComponent } from './zone/updatezone/updatezone.component';
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
import { SuperviseurComponent } from './superviseur/superviseur.component';

const routes: Routes = [
  {
  path:'',
  component:AdminComponent,
  children:[
    {
      path:'groups',
      component:GroupeComponent
    },
    {
      path:'addgroup',
      component:AddgroupComponent
    },
    {
      path:'groups/:id',
      component:EditgroupeComponent
    },
    {
      path:'addzones',
      component:AddzoneComponent
    },
    {
      path:'zones',
      component:ZoneComponent
    },{
      path:'zones/:id',
      component:UpdatezoneComponent
    },
    {
      path:'scanners',
      component:ScannerComponent
    },
    {
      path:'scanners/:id',
      component:UpdateScannerComponent
    },
    {
      path:'users',
      component:ListusersComponent
    },
    {
      path:'addusers',
      component:AddusersComponent
    },
    {
      path:'users/:id',
      component:UpdateusersComponent
    },
    {
      path:'addScanner',
      component:AddscannerComponent
    },
    {
      path:'bobines',
    component:BobineComponent
    },
    {
      path:'addbobine',
      component:AddbobineComponent
    },
    {
      path:'bobines/:id',
      component:UpdateBobineComponent
    },
    {
      path:'Machines',
      component:MachineComponent
    },
    {
      path:'AddMachine',
      component:AddMachineComponent
    },
    {
      path:'Machines/:id',
      component:UpdateMachineComponent
    },
    {
      path:'Livreurs',
      component:LivreurComponent
    },
    {
      path:'Superviseurs',
      component:SuperviseurComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
