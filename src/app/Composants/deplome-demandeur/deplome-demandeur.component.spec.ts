import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeplomeDemandeurComponent } from './deplome-demandeur.component';

describe('DeplomeDemandeurComponent', () => {
  let component: DeplomeDemandeurComponent;
  let fixture: ComponentFixture<DeplomeDemandeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeplomeDemandeurComponent]
    });
    fixture = TestBed.createComponent(DeplomeDemandeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
