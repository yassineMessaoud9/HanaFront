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
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
