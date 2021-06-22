import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IlanpaylasPage } from './ilanpaylas.page';

describe('IlanpaylasPage', () => {
  let component: IlanpaylasPage;
  let fixture: ComponentFixture<IlanpaylasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlanpaylasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IlanpaylasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
