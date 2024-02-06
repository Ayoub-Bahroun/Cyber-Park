import { TestBed } from '@angular/core/testing';

import { ServiceEntrepriseService } from './service-entreprise.service';

describe('ServiceEntrepriseService', () => {
  let service: ServiceEntrepriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEntrepriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
