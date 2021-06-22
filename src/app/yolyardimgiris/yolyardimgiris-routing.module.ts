import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YolyardimgirisPage } from './yolyardimgiris.page';

const routes: Routes = [
  {
    path: '',
    component: YolyardimgirisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YolyardimgirisPageRoutingModule {}
