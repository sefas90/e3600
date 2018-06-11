import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { InformationService } from '../login/information.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Injectable()
export class AuthGuard implements CanActivate {
  _permissions: any;
  constructor(private router: Router,
              private informationService: InformationService,
              public http: HttpClient) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isLoggedUser()) {
      this.setDashboard();
      return true;
    } else {
      return false;
    }
  }

  isLoggedUser() {
    return this.informationService.getAttributeFromData('user');
  }

  setDashboard() {
    this._permissions = this.informationService.getAttributeFromData('user');
    this.informationService.setDashboard(this._permissions.id);
  }
}
