import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlanpaylasPageRoutingModule } from './ilanpaylas-routing.module';

import { IlanpaylasPage } from './ilanpaylas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlanpaylasPageRoutingModule
  ],
  declarations: [IlanpaylasPage]
})
export class IlanpaylasPageModule {}
