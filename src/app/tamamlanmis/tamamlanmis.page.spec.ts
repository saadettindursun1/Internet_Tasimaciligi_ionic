import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TamamlanmisPage } from './tamamlanmis.page';

describe('TamamlanmisPage', () => {
  let component: TamamlanmisPage;
  let fixture: ComponentFixture<TamamlanmisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamamlanmisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TamamlanmisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
