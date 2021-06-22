import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YolyardimgirisPage } from './yolyardimgiris.page';

describe('YolyardimgirisPage', () => {
  let component: YolyardimgirisPage;
  let fixture: ComponentFixture<YolyardimgirisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YolyardimgirisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YolyardimgirisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
