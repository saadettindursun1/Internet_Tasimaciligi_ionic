import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DenemePage } from './deneme.page';

const routes: Routes = [
  {
    path: '',
    component: DenemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DenemePageRoutingModule { }
