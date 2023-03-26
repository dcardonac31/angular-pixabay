import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronManComponent } from './iron-man.component';

describe('IronManComponent', () => {
  let component: IronManComponent;
  let fixture: ComponentFixture<IronManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronManComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IronManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
