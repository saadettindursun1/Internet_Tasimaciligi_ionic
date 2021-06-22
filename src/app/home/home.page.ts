import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  rol:string;
  constructor() {}

  ngOnInit(): void {
    this.rolKontrol();
    
  }


  rolKontrol(){
    var user: any = JSON.parse(localStorage.getItem("user"));
    console.log(this.rol);
    if(user){
      this.rol = user.displayName;

      if(this.rol=="isletme"){location.pathname="ayarlar"};
      if(this.rol=="yolyardim"){location.pathname="yolyardimekran"};
      if(this.rol!="isletme" && this.rol!="yolyardim"){location.pathname="sofor-ekran"};
    }
  }
}
