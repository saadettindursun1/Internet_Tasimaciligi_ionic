import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'sofor',
    loadChildren: () => import('./sofor/sofor.module').then(m => m.SoforPageModule)
  },
  {
    path: 'deneme',
    loadChildren: () => import('./deneme/deneme.module').then(m => m.DenemePageModule)
  },
  {
    path: 'soforkayit',
    loadChildren: () => import('./soforkayit/soforkayit.module').then( m => m.SoforkayitPageModule)
  },
  {
    path: 'sofor-ekran',
    loadChildren: () => import('./sofor-ekran/sofor-ekran.module').then( m => m.SoforEkranPageModule)
  },
  {
    path: 'isletme',
    loadChildren: () => import('./isletme/isletme.module').then( m => m.IsletmePageModule)
  },
  {
    path: 'isletme-kayit',
    loadChildren: () => import('./isletme-kayit/isletme-kayit.module').then( m => m.IsletmeKayitPageModule)
  },
  {
    path: 'ilanpaylas',
    loadChildren: () => import('./ilanpaylas/ilanpaylas.module').then( m => m.IlanpaylasPageModule)
  },
  {
    path: 'ilanislem',
    loadChildren: () => import('./ilanislem/ilanislem.module').then( m => m.IlanislemPageModule)
  },
  {
    path: 'verilenler',
    loadChildren: () => import('./verilenler/verilenler.module').then( m => m.VerilenlerPageModule)
  },
  {
    path: 'ayarlar',
    loadChildren: () => import('./ayarlar/ayarlar.module').then( m => m.AyarlarPageModule)
  },
  {
    path: 'sofor-ayar',
    loadChildren: () => import('./sofor-ayar/sofor-ayar.module').then( m => m.SoforAyarPageModule)
  },
  {
    path: 'soforyardim',
    loadChildren: () => import('./soforyardim/soforyardim.module').then( m => m.SoforyardimPageModule)
  },
  {
    path: 'tamamlanmis',
    loadChildren: () => import('./tamamlanmis/tamamlanmis.module').then( m => m.TamamlanmisPageModule)
  },
  {
    path: 'yolyardim',
    loadChildren: () => import('./yolyardim/yolyardim.module').then( m => m.YolyardimPageModule)
  },
  {
    path: 'yolyardimgiris',
    loadChildren: () => import('./yolyardimgiris/yolyardimgiris.module').then( m => m.YolyardimgirisPageModule)
  },
  {
    path: 'yolyardimekran',
    loadChildren: () => import('./yolyardimekran/yolyardimekran.module').then( m => m.YolyardimekranPageModule)
  },
  {
    path: 'yolyardimguncelle',
    loadChildren: () => import('./yolyardimguncelle/yolyardimguncelle.module').then( m => m.YolyardimguncellePageModule)
  },
  {
    path: 'isletmeguncelle',
    loadChildren: () => import('./isletmeguncelle/isletmeguncelle.module').then( m => m.IsletmeguncellePageModule)
  },
  {
    path: 'soforguncelle',
    loadChildren: () => import('./soforguncelle/soforguncelle.module').then( m => m.SoforguncellePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
