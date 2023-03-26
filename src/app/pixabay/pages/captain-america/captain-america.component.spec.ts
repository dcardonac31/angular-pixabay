import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainAmericaComponent } from './captain-america.component';

describe('CaptainAmericaComponent', () => {
  let component: CaptainAmericaComponent;
  let fixture: ComponentFixture<CaptainAmericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptainAmericaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptainAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
