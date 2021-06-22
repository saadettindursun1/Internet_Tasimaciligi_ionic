import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YolyardimekranPage } from './yolyardimekran.page';

describe('YolyardimekranPage', () => {
  let component: YolyardimekranPage;
  let fixture: ComponentFixture<YolyardimekranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YolyardimekranPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YolyardimekranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
