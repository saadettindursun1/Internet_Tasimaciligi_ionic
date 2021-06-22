import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YolyardimekranPage } from './yolyardimekran.page';

const routes: Routes = [
  {
    path: '',
    component: YolyardimekranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YolyardimekranPageRoutingModule {}
