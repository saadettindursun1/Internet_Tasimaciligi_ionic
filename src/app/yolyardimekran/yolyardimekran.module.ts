import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YolyardimekranPageRoutingModule } from './yolyardimekran-routing.module';

import { YolyardimekranPage } from './yolyardimekran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YolyardimekranPageRoutingModule
  ],
  declarations: [YolyardimekranPage]
})
export class YolyardimekranPageModule {}
