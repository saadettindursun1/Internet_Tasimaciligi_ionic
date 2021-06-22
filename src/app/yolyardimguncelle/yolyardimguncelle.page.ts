import { Kayit } from './../models/kayit';
import { FbserviceService } from './../services/fbservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yolyardimguncelle',
  templateUrl: './yolyardimguncelle.page.html',
  styleUrls: ['./yolyardimguncelle.page.scss'],
})
export class YolyardimguncellePage implements OnInit {
  uid:string;
  kayitlar:any;
  durum:boolean=false;
  guncellenenKayit:Kayit = new Kayit();
  constructor(
    public fbServis:FbserviceService
  ) { }

  ngOnInit() {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid=user.uid;
    this.listele();
  }
  listele() {
    this.fbServis.KayitListelebyUid2(this.uid).snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as Kayit)
        console.log(this.kayitlar);
      })
    });

  }

  guncelleme(){
    this.guncellenenKayit.key=this.kayitlar[0].key;
    this.fbServis.KayitDuzenle(this.guncellenenKayit);
    console.log("Başarılı Güncelleme");
    this.durum=true;
  }
}
