import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OjasRoutingModule } from './ojas-routing.module';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { HrdepartmentComponent } from './hrdepartment/hrdepartment.component';

@NgModule({
  declarations: [HomeComponent, EmployeeComponent, HrdepartmentComponent],
  imports: [
    CommonModule,
    OjasRoutingModule
  ]
})
export class OjasModule { }
