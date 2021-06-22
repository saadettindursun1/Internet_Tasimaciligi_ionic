import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DenemePage } from './deneme.page';

describe('DenemePage', () => {
  let component: DenemePage;
  let fixture: ComponentFixture<DenemePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenemePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DenemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
