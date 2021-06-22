import { Router } from '@angular/router';
import { soforServices } from './../services/soforServices';
import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-sofor',
  templateUrl: './sofor.page.html',
  styleUrls: ['./sofor.page.scss'],
})
export class SoforPage implements OnInit {

  sonuc:boolean;
  durum:string;
  constructor(public Fbservice: soforServices,
    public router: Router) { }

  ngOnInit() {
  }

  giris(mail:any,parola:any) {
    this.Fbservice.OturumAc(mail, parola).then(d => {
      this.sonuc = false;
    
      this.durum = "Giriş Başarılı";
      localStorage.setItem("user", JSON.stringify(d.user));
      this.router.navigate(['sofor-ekran']);
      console.log(this.durum);
    }, err => {
      this.durum = "Giriş Başarısız";
      this.sonuc = true;
    });
  }

}
