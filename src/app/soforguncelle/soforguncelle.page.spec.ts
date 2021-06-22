import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoforguncellePage } from './soforguncelle.page';

describe('SoforguncellePage', () => {
  let component: SoforguncellePage;
  let fixture: ComponentFixture<SoforguncellePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoforguncellePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoforguncellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
