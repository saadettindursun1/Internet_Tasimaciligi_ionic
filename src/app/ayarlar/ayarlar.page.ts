import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayarlar',
  templateUrl: './ayarlar.page.html',
  styleUrls: ['./ayarlar.page.scss'],
})
export class AyarlarPage implements OnInit {

  constructor(  public router: Router ) { }

  ngOnInit() {
  }
cikisYap(){
  localStorage.clear();
  this.router.navigate(['isletme']);

}
}
