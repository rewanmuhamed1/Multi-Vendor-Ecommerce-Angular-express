import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { redirectRoleGuard } from './redirect-role.guard';

describe('redirectRoleGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => redirectRoleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
