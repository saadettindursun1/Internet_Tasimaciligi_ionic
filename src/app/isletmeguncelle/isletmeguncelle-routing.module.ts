import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsletmeguncellePage } from './isletmeguncelle.page';

const routes: Routes = [
  {
    path: '',
    component: IsletmeguncellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsletmeguncellePageRoutingModule {}
