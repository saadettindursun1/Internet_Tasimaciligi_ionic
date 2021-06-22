import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsletmeguncellePage } from './isletmeguncelle.page';

describe('IsletmeguncellePage', () => {
  let component: IsletmeguncellePage;
  let fixture: ComponentFixture<IsletmeguncellePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsletmeguncellePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsletmeguncellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
