import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoforyardimPageRoutingModule } from './soforyardim-routing.module';

import { SoforyardimPage } from './soforyardim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoforyardimPageRoutingModule
  ],
  declarations: [SoforyardimPage]
})
export class SoforyardimPageModule {}
