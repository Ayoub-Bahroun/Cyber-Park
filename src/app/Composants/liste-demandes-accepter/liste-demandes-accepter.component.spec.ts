import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandesAccepterComponent } from './liste-demandes-accepter.component';

describe('ListeDemandesAccepterComponent', () => {
  let component: ListeDemandesAccepterComponent;
  let fixture: ComponentFixture<ListeDemandesAccepterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDemandesAccepterComponent]
    });
    fixture = TestBed.createComponent(ListeDemandesAccepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
