import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SoforPageRoutingModule } from './sofor-routing.module';
import { SoforPage } from './sofor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoforPageRoutingModule
  ],
  declarations: [SoforPage]
})
export class SoforPageModule { }
