import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { LogoutService } from './logout.service';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { CONSTANTS } from '../../core/constants';
import { InformationService } from '../../login/information.service';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';

@Injectable()
export class PermissionsService {
  _permissions: any;

  _modulePermissions: any;
  _functionPermissions: any;

  constructor(private httpClient: HttpClientService,
              private logoutService: LogoutService,
              private informationService: InformationService) {
  }

  getDashboard() {
    this._permissions = this.informationService.getAttributeFromData('user');
    console.log(this._permissions);

  }

}
