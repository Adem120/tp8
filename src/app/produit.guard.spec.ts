import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ProduitGuard } from './produit.guard';

import { AuthService } from './services/auth.service';

describe('ProduitGuard', () => {
  let guard: ProduitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProduitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  
});
