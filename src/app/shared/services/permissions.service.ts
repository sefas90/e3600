import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { LogoutService } from './logout.service';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { CONSTANTS } from '../../core/constants';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';

@Injectable()
export class PermissionsService {
  modulePermissions: any;

  _modulePermissions: any;
  _functionPermissions: any;

  constructor(private httpClient: HttpClientService,
              private logoutService: LogoutService) {
  }

}
