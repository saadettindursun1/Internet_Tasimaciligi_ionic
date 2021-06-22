import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sofor-ayar',
  templateUrl: './sofor-ayar.page.html',
  styleUrls: ['./sofor-ayar.page.scss'],
})
export class SoforAyarPage implements OnInit {

  constructor( public router : Router) { }

  ngOnInit() {
  }

  cikisYap(){
    localStorage.clear();
  this.router.navigate(['home']);
  }
}
