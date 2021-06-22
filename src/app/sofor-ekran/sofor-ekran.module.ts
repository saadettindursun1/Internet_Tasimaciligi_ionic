import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoforEkranPageRoutingModule } from './sofor-ekran-routing.module';

import { SoforEkranPage } from './sofor-ekran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoforEkranPageRoutingModule
  ],
  declarations: [SoforEkranPage]
})
export class SoforEkranPageModule {}
