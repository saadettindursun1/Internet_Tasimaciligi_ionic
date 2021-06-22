import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsletmeKayitPage } from './isletme-kayit.page';

const routes: Routes = [
  {
    path: '',
    component: IsletmeKayitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsletmeKayitPageRoutingModule {}
