import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlanislemPage } from './ilanislem.page';

const routes: Routes = [
  {
    path: '',
    component: IlanislemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlanislemPageRoutingModule {}
