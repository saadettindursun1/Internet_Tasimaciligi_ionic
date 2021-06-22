import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YolyardimguncellePage } from './yolyardimguncelle.page';

describe('YolyardimguncellePage', () => {
  let component: YolyardimguncellePage;
  let fixture: ComponentFixture<YolyardimguncellePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YolyardimguncellePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YolyardimguncellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
