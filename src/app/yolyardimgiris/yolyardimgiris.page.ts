import { Router } from '@angular/router';
import { FbserviceService } from './../services/fbservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yolyardimgiris',
  templateUrl: './yolyardimgiris.page.html',
  styleUrls: ['./yolyardimgiris.page.scss'],
})
export class YolyardimgirisPage implements OnInit {

  sonuc:boolean;
  durum:string;
  constructor(
    public Fbservice: FbserviceService,
    public router: Router
    ) { }

  ngOnInit() {
  }

  giris(mail:any,parola:any) {
    this.Fbservice.OturumAc(mail, parola).then(d => {
      this.sonuc = false;
    
      this.durum = "Giriş Başarılı";
      localStorage.setItem("user", JSON.stringify(d.user));
      this.router.navigate(['yolyardimekran']);
      console.log(this.durum);
    }, err => {
      this.durum = "Giriş Başarısız";
      this.sonuc = true;
    });
  }

}