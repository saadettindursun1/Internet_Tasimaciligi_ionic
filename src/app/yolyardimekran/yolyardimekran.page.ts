import { Kayit } from './../models/kayit';
import { FbserviceService } from './../services/fbservice.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yolyardimekran',
  templateUrl: './yolyardimekran.page.html',
  styleUrls: ['./yolyardimekran.page.scss'],
})
export class YolyardimekranPage implements OnInit {

  uid:string;
  kayitlar:any;
  constructor(
    public router: Router,
    public fbServis:FbserviceService
  ) { }

  ngOnInit() {
    var user: any = JSON.parse(localStorage.getItem("user"));
   this.uid=user.uid;
   this.listele();
  }

  cikisYap(){
    localStorage.clear();
  this.router.navigate(['home']);
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
}
