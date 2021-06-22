import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YolyardimPageRoutingModule } from './yolyardim-routing.module';

import { YolyardimPage } from './yolyardim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YolyardimPageRoutingModule
  ],
  declarations: [YolyardimPage]
})
export class YolyardimPageModule {}
