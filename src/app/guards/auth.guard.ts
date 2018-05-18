import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { InformationService } from '../login/information.service';
// import { PermissionsService } from '../shared/services/permissions.service';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private informationService: InformationService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggedUser()) {
      return true;
    } else {
      return false;
    }
  }

  isLoggedUser() {
    return this.informationService.getAttributeFromData('user');
  }
}
