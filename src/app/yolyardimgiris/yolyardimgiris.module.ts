import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YolyardimgirisPageRoutingModule } from './yolyardimgiris-routing.module';

import { YolyardimgirisPage } from './yolyardimgiris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YolyardimgirisPageRoutingModule
  ],
  declarations: [YolyardimgirisPage]
})
export class YolyardimgirisPageModule {}
