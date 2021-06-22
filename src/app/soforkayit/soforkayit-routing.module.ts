import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoforkayitPage } from './soforkayit.page';

const routes: Routes = [
  {
    path: '',
    component: SoforkayitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoforkayitPageRoutingModule {}
