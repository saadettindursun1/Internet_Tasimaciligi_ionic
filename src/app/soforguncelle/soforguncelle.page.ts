import { soforKayit } from './../models/soforKayit';
import { soforServices } from './../services/soforServices';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-soforguncelle',
  templateUrl: './soforguncelle.page.html',
  styleUrls: ['./soforguncelle.page.scss'],
})
export class SoforguncellePage implements OnInit {

  kayitlar:any;
  durum:boolean=false;
  guncellenenKayit:soforKayit=new soforKayit();
  uid:string;
  constructor(
    public fbServis:soforServices
  ) { }

  ngOnInit() {
    var user: any = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.listele();
  }
 
  listele() {
    this.fbServis.KayitListele2(this.uid).snapshotChanges().subscribe(data => {
      this.kayitlar = [];
      data.forEach(satir => {
        var y = { ...satir.payload.toJSON(), key: satir.key };
        this.kayitlar.push(y as soforKayit)
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
