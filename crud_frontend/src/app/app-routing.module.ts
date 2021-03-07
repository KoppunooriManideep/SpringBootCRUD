import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [
  {path:"users",component:UserlistComponent},
  {path:"",redirectTo:"users",pathMatch:'full'},
  {path:"createuser",component:CreateuserComponent},
  {path:"updateuser/:id",component:CreateuserComponent},
  {path:"viewdetails/:id",component:ViewdetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
