import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Role } from './role';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class RoleService {
  private url = 'http://e3600.test/api/v1/roles/';
  constructor(public http: HttpClient) {
  }

  loadRoles(): Observable<any> {
    return this.http.get(this.url);
  }

  getRole(id): Observable<any> {
    return this.http.get(this.url + id);
  }

  getRolePermissions(id): Observable<any> {
    return this.http.get('http://e3600.test/api/v1/rolePermissions2/' + id);
  }

  createRole(data: Role): Observable<any> {
    return this.http.post(this.url, data);
  }

  updatePermission(updatePermission): Observable<any> {
    return this.http.put('http://e3600.test/api/v1/rolePermissions/', updatePermission);
  }

  editRole(data: Role, id): Observable<any> {
    return this.http.put(this.url + id, data);
  }

  deleteRole(id): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
