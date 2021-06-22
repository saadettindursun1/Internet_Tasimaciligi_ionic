import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DenemePageRoutingModule } from './deneme-routing.module';

import { DenemePage } from './deneme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DenemePageRoutingModule
  ],
  declarations: [DenemePage]
})
export class DenemePageModule {}
