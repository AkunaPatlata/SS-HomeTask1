import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMePageComponent } from './about-me-page.component';
import { RouterModule } from '@angular/router';
import { CardBasicComponent } from '../../components/card-basic/card-basic.component';
import { CardSmallComponent } from '../../components/card-small/card-small.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AboutMePageComponent,
    CardBasicComponent,
    CardSmallComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AboutMePageComponent }
    ]),
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
  ]
})
export class AboutMePageModule { }