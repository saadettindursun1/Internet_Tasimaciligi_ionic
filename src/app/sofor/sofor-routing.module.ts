import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoforPage } from './sofor.page';

const routes: Routes = [
  {
    path: '',
    component: SoforPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoforPageRoutingModule { }
