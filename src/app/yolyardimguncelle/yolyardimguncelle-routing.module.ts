import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YolyardimguncellePage } from './yolyardimguncelle.page';

const routes: Routes = [
  {
    path: '',
    component: YolyardimguncellePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YolyardimguncellePageRoutingModule {}
