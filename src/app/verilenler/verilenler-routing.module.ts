import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerilenlerPage } from './verilenler.page';

const routes: Routes = [
  {
    path: '',
    component: VerilenlerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerilenlerPageRoutingModule {}
