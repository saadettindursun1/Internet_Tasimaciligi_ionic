import { Router } from '@angular/router';
import { isverenServices } from './../services/isverenServices';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-isletme',
  templateUrl: './isletme.page.html',
  styleUrls: ['./isletme.page.scss'],
})
export class IsletmePage implements OnInit {

  sonuc:boolean;
  durum:string;
  constructor(public Fbservice: isverenServices,
    public router: Router) { }

  ngOnInit() {
  }

  giris(mail:any,parola:any) {
    this.Fbservice.OturumAc(mail, parola).then(d => {
      this.sonuc = false;
    
      this.durum = "Giriş Başarılı";
      localStorage.setItem("user", JSON.stringify(d.user));
      this.router.navigate(['ilanpaylas']);
      console.log(this.durum);
    }, err => {
      this.durum = "Giriş Başarısız";
      this.sonuc = true;
    });
  }

}
