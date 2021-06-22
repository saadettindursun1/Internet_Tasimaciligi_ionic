import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoforguncellePageRoutingModule } from './soforguncelle-routing.module';

import { SoforguncellePage } from './soforguncelle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoforguncellePageRoutingModule
  ],
  declarations: [SoforguncellePage]
})
export class SoforguncellePageModule {}
