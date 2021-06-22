import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsletmePage } from './isletme.page';

describe('IsletmePage', () => {
  let component: IsletmePage;
  let fixture: ComponentFixture<IsletmePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsletmePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsletmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
