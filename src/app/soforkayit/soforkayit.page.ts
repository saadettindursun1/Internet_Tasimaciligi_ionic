import { uyeSofor } from './../models/uyeSofor';
import { Router } from '@angular/router';
import { soforServices } from './../services/soforServices';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soforkayit',
  templateUrl: './soforkayit.page.html',
  styleUrls: ['./soforkayit.page.scss'],
})
export class SoforkayitPage implements OnInit {

  secUye: uyeSofor = new uyeSofor();
  durum:string;
  sonuc:boolean;
  constructor( 
     public Fbservice: soforServices,
    public router: Router
    ) { }

  ngOnInit() {
  }

  KayitOl() {
 
    this.Fbservice.uyeOl(this.secUye).then(d => {
      d.user.updateProfile({
        displayName: this.secUye.aracTur
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
