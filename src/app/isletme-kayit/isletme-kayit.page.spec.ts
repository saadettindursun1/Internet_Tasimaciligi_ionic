import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsletmeKayitPage } from './isletme-kayit.page';

describe('IsletmeKayitPage', () => {
  let component: IsletmeKayitPage;
  let fixture: ComponentFixture<IsletmeKayitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsletmeKayitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsletmeKayitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
