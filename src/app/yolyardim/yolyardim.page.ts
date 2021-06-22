import { Router } from '@angular/router';
import { soforServices } from './../services/soforServices';
import { FbserviceService } from './../services/fbservice.service';
import { Kayit } from './../models/kayit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yolyardim',
  templateUrl: './yolyardim.page.html',
  styleUrls: ['./yolyardim.page.scss'],
})
export class YolyardimPage implements OnInit {

  kayitlar: any;
  durum: string;
  filtre: string = "";
  usehir: string = "";
  sonuc: boolean = false;

  seckayit: Kayit = new Kayit();
  constructor(
    public Fbservice: FbserviceService,
    public Fbservis: soforServices,
    public router: Router
  ) { }
  ngOnInit(): void {


  }

  KayitOl() {
    var tarih = new Date();
    this.seckayit.kayitTarih = tarih.getTime().toString();

    this.Fbservice.uyeOl(this.seckayit).then(d => {
      d.user.updateProfile({
        displayName: "yolyardim"
      }).then();
      this.seckayit.uid = d.user.uid;

      localStorage.setItem("user", JSON.stringify(d.user));
      this.uyeEkle();

    }, err => {
      this.durum = "Kayıt başarısız E mail adresi kullanılıyor olabilir.";
      this.sonuc = false;

    })
  }

  uyeEkle() {
    this.Fbservice.UyeEkle(this.seckayit).then(d => {
      this.durum = "Kayıt Başarılı";
      this.sonuc = true;
    });
  }
  
 /* Kaydet() {
    var tarih = new Date();
    if (this.seckayit.key == null) {

      this.seckayit.kayitTarih = tarih.getTime().toString();
      this.Fbservice.KayitEkle(this.seckayit).then(s => {
        this.durum = "Kayıt Eklendi";
        this.sonuc = true;
      }); 
    }
    else {
      this.seckayit.kayitTarih = tarih.getTime().toString();
      this.Fbservice.KayitDuzenle(this.seckayit).then(s => {
        this.durum = "Kayıt Güncellendi";
        this.sonuc = true;
      })
    }
  }*/



  duzenle(kayit: Kayit) {
    Object.assign(this.seckayit, kayit)

  }

}

