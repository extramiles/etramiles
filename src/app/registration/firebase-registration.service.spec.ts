import { TestBed, inject } from '@angular/core/testing';

import { FirebaseRegistrationService } from './firebase-registration.service';

describe('FirebaseRegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseRegistrationService]
    });
  });

  it('should be created', inject([FirebaseRegistrationService], (service: FirebaseRegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
