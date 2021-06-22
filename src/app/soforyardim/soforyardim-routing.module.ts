import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoforyardimPage } from './soforyardim.page';

const routes: Routes = [
  {
    path: '',
    component: SoforyardimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoforyardimPageRoutingModule {}
