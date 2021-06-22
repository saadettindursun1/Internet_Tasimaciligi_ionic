import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoforEkranPage } from './sofor-ekran.page';

describe('SoforEkranPage', () => {
  let component: SoforEkranPage;
  let fixture: ComponentFixture<SoforEkranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoforEkranPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoforEkranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
