import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ModoExamenComponent } from './ModoExamen/modo-examen.component';


@NgModule({
  declarations: [
    AuthComponent,
    HomeComponent,
    ModoExamenComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
   /*  SharedModule, */
  ]
})
export class AuthModule { }
