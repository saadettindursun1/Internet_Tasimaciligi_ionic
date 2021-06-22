import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerilenlerPageRoutingModule } from './verilenler-routing.module';

import { VerilenlerPage } from './verilenler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerilenlerPageRoutingModule
  ],
  declarations: [VerilenlerPage]
})
export class VerilenlerPageModule {}
