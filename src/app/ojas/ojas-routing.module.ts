import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { HrdepartmentComponent } from './hrdepartment/hrdepartment.component';

const routes: Routes = [
  {path:"employee",component:EmployeeComponent},
  {path:"home",component:HomeComponent},
  {path:"hrdepartment",component:HrdepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OjasRoutingModule { }
