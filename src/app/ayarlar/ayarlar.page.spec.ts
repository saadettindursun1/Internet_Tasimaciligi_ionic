import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AyarlarPage } from './ayarlar.page';

describe('AyarlarPage', () => {
  let component: AyarlarPage;
  let fixture: ComponentFixture<AyarlarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyarlarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AyarlarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
