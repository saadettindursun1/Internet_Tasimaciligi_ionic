import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsletmePage } from './isletme.page';

const routes: Routes = [
  {
    path: '',
    component: IsletmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsletmePageRoutingModule {}
