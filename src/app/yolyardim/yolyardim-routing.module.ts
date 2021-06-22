import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YolyardimPage } from './yolyardim.page';

const routes: Routes = [
  {
    path: '',
    component: YolyardimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YolyardimPageRoutingModule {}
