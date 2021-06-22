import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YolyardimguncellePageRoutingModule } from './yolyardimguncelle-routing.module';

import { YolyardimguncellePage } from './yolyardimguncelle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YolyardimguncellePageRoutingModule
  ],
  declarations: [YolyardimguncellePage]
})
export class YolyardimguncellePageModule {}
