import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyarlarPage } from './ayarlar.page';

const routes: Routes = [
  {
    path: '',
    component: AyarlarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyarlarPageRoutingModule {}
