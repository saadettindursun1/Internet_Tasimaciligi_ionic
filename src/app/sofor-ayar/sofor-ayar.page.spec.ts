import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoforAyarPage } from './sofor-ayar.page';

describe('SoforAyarPage', () => {
  let component: SoforAyarPage;
  let fixture: ComponentFixture<SoforAyarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoforAyarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoforAyarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
