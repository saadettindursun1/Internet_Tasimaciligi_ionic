import { isverenKayit } from './../models/isverenKayit';
import { isverenServices } from './../services/isverenServices';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isletmeguncelle',
  templateUrl: './isletmeguncelle.page.html',
  styleUrls: ['./isletmeguncelle.page.scss'],
})
export class IsletmeguncellePage implements OnInit {

  kayitlar:any;
  durum:boolean=false;
  guncellenenKayit:isverenKayit=new isverenKayit();
  uid:string;
  constructor(
    public fbServis:isverenServices
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
        this.kayitlar.push(y as isverenKayit)
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
