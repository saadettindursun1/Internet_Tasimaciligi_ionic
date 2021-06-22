import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoforkayitPage } from './soforkayit.page';

describe('SoforkayitPage', () => {
  let component: SoforkayitPage;
  let fixture: ComponentFixture<SoforkayitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoforkayitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoforkayitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
