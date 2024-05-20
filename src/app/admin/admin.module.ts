import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GroupeComponent } from './groupe/groupe.component';
import { AddgroupComponent } from './groupe/addgroup/addgroup.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GroupeComponent,
    AddgroupComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule
  ]
})
export class AdminModule { }
