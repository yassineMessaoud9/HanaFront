import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GroupeComponent } from './groupe/groupe.component';
import { AddgroupComponent } from './groupe/addgroup/addgroup.component';

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
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
