import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsletmeKayitPageRoutingModule } from './isletme-kayit-routing.module';

import { IsletmeKayitPage } from './isletme-kayit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsletmeKayitPageRoutingModule
  ],
  declarations: [IsletmeKayitPage]
})
export class IsletmeKayitPageModule {}
