import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YolyardimPage } from './yolyardim.page';

describe('YolyardimPage', () => {
  let component: YolyardimPage;
  let fixture: ComponentFixture<YolyardimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YolyardimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YolyardimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
