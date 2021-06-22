import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsletmeguncellePageRoutingModule } from './isletmeguncelle-routing.module';

import { IsletmeguncellePage } from './isletmeguncelle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsletmeguncellePageRoutingModule
  ],
  declarations: [IsletmeguncellePage]
})
export class IsletmeguncellePageModule {}
