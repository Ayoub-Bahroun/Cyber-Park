import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDemandeurComponent } from './cv-demandeur.component';

describe('CvDemandeurComponent', () => {
  let component: CvDemandeurComponent;
  let fixture: ComponentFixture<CvDemandeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvDemandeurComponent]
    });
    fixture = TestBed.createComponent(CvDemandeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
