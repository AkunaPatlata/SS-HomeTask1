import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';
import { CardHomeBasicComponent } from '../../components/card-home-basic/card-home-basic.component';
import { CardHomeSmallComponent } from '../../components/card-home-small/card-home-small.component';
import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HomePageComponent,
    CardHomeBasicComponent,
    CardHomeSmallComponent
],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent }
    ]),
    MatCardModule,
    FlexLayoutModule,
  ]
})
export class HomePageModule { }