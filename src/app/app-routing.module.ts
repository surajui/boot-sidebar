import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { MainComponent } from './main/main.component';
import { Main1Component } from './main1/main1.component';
import { HloComponent } from './hlo/hlo.component';

const routes: Routes = [
  {path:"",component:MainComponent,
  children:[
{path:"",component:Main1Component},
{path:"hlo",component:HloComponent},
{path:"contact",component:ContactComponent},
{path:"services",component:ServicesComponent},
{path:"ojas",loadChildren:'./ojas/ojas.module#OjasModule'}
  ]},
  // {path:"about",component:AboutComponent},
  // {path:"contact",component:ContactComponent},
  // {path:"services",component:ServicesComponent},
  {path:"ojas",loadChildren:'./ojas/ojas.module#OjasModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
