import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerilenlerPage } from './verilenler.page';

describe('VerilenlerPage', () => {
  let component: VerilenlerPage;
  let fixture: ComponentFixture<VerilenlerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerilenlerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerilenlerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
