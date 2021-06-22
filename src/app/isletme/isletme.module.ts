import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsletmePageRoutingModule } from './isletme-routing.module';

import { IsletmePage } from './isletme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsletmePageRoutingModule
  ],
  declarations: [IsletmePage]
})
export class IsletmePageModule {}
