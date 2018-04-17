import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}
