import { AngularFireAuth } from '@angular/fire/auth';
import { Kayit } from './../models/kayit';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FbserviceService {
  /* kayitlar başlangıç */
  private dbKayit = '/Yolyardim';

  kayitRef: AngularFireList<Kayit> = null;
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.kayitRef = db.list(this.dbKayit);
  }

  uyeOl(uye: Kayit) {
    return this.afAuth.createUserWithEmailAndPassword(uye.posta, uye.sifre);
}
UyeEkle(uye: Kayit) {
  return this.kayitRef.push(uye);

}
  KayitListele() {
    return this.kayitRef;
  }

  KayitListelebyKonum(ukonum: string) {
    // return this.db.list("Kayitlar", q => q.orderByChild("konum").equalTo(ukonum));
    return this.db.list("Yolyardim", q => q.orderByChild("konum").equalTo(ukonum));
  }

  KayitListelebyUid(ukonum: string, yardim: string) {
    // return this.db.list("Kayitlar", q => q.orderByChild("konum").equalTo(ukonum));
    return this.db.list("Yolyardim", q => q.orderByChild("konum" && "yardim").equalTo(ukonum && yardim));
  }

  KayitListelebyUid2(gelenid: string) {
    // return this.db.list("Kayitlar", q => q.orderByChild("konum").equalTo(ukonum));
    return this.db.list("Yolyardim", q => q.orderByChild("uid").equalTo(gelenid));
  }

  KayitEkle(kayit: Kayit) {
    return this.kayitRef.push(kayit);

  }
  KayitDuzenle(kayit: Kayit) {
    return this.kayitRef.update(kayit.key, kayit);
  }
  KayitSil(key: string) {
    return this.kayitRef.remove(key);
  }

  OturumAc(mail, parola) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
}
OturumKapat() {
    return this.afAuth.signOut();
}
  /* kayitlar bitiş */
}
