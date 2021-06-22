import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoforguncellePage } from './soforguncelle.page';

const routes: Routes = [
  {
    path: '',
    component: SoforguncellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoforguncellePageRoutingModule {}
