import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoforAyarPage } from './sofor-ayar.page';

const routes: Routes = [
  {
    path: '',
    component: SoforAyarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoforAyarPageRoutingModule {}
