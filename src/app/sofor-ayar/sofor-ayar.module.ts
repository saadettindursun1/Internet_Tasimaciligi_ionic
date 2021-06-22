import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoforAyarPageRoutingModule } from './sofor-ayar-routing.module';

import { SoforAyarPage } from './sofor-ayar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoforAyarPageRoutingModule
  ],
  declarations: [SoforAyarPage]
})
export class SoforAyarPageModule {}
