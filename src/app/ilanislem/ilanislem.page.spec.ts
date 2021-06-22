import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IlanislemPage } from './ilanislem.page';

describe('IlanislemPage', () => {
  let component: IlanislemPage;
  let fixture: ComponentFixture<IlanislemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlanislemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IlanislemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
