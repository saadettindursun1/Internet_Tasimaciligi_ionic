import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoforkayitPageRoutingModule } from './soforkayit-routing.module';

import { SoforkayitPage } from './soforkayit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoforkayitPageRoutingModule
  ],
  declarations: [SoforkayitPage]
})
export class SoforkayitPageModule {}
