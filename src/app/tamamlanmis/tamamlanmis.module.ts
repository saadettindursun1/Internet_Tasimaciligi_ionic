import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TamamlanmisPageRoutingModule } from './tamamlanmis-routing.module';

import { TamamlanmisPage } from './tamamlanmis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TamamlanmisPageRoutingModule
  ],
  declarations: [TamamlanmisPage]
})
export class TamamlanmisPageModule {}
