import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlanislemPageRoutingModule } from './ilanislem-routing.module';

import { IlanislemPage } from './ilanislem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlanislemPageRoutingModule
  ],
  declarations: [IlanislemPage]
})
export class IlanislemPageModule {}
