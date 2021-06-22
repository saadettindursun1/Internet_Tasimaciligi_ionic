import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoforEkranPage } from './sofor-ekran.page';

const routes: Routes = [
  {
    path: '',
    component: SoforEkranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoforEkranPageRoutingModule {}
