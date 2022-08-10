import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from './Components/header/header.component';
import { DefaultButtonComponent } from './Buttons/default-button/default-button.component';
import { LinkButtonComponent } from './Buttons/link-button/link-button.component';
import { BarrasComponent } from './Charts/Barras/barras/barras.component';
import { DonaComponent } from './Charts/Dona/dona/dona.component';
import { DonaPuntosComponent } from './Charts/DonaPuntos/dona-puntos/dona-puntos.component';
import { LineComponent } from './Charts/Line/line/line.component';
import { PieComponent } from './Charts/Pie/pie/pie.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DefaultButtonComponent,
    LinkButtonComponent,
    BarrasComponent,
    DonaComponent,
    DonaPuntosComponent,
    LineComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    HeaderComponent
  ]
})
export class SharedModule { }
