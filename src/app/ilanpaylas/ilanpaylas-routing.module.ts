import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlanpaylasPage } from './ilanpaylas.page';

const routes: Routes = [
  {
    path: '',
    component: IlanpaylasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlanpaylasPageRoutingModule {}
