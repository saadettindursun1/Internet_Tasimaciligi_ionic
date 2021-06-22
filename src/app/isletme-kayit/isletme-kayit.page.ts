import { Router } from '@angular/router';
import { isverenServices } from './../services/isverenServices';
import { isverenKayit } from './../models/isverenKayit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isletme-kayit',
  templateUrl: './isletme-kayit.page.html',
  styleUrls: ['./isletme-kayit.page.scss'],
})
export class IsletmeKayitPage implements OnInit {

  secUye: isverenKayit = new isverenKayit();
  durum:string;
  sonuc:boolean;
  constructor( 
     public Fbservice: isverenServices,
    public router: Router
    ) { }

  ngOnInit() {
  }

  KayitOl() {
    var tarih = new Date();
    this.secUye.kayitTarih = tarih.getTime().toString();

    this.Fbservice.uyeOl(this.secUye).then(d => {
      d.user.updateProfile({
        displayName: "isletme"
      }).then();
      this.secUye.uid = d.user.uid;

      localStorage.setItem("user", JSON.stringify(d.user));
      this.uyeEkle();

    }, err => {
      this.durum = "Kayıt başarısız E mail adresi kullanılıyor olabilir.";
      this.sonuc = false;

    })
  }

  uyeEkle() {
    this.Fbservice.UyeEkle(this.secUye).then(d => {
      this.durum = "Kayıt Başarılı";
      this.sonuc = true;
    });
  }

}
