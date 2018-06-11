import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InformationService {

  private data: any;
  _dashboard: any;
  _permissions: any;

  constructor(public http: HttpClient) {
    this.data = null;
  }

  loadData() {
    this.data = {
      user: JSON.parse(localStorage.getItem('user'))
    };
  }

  setAttributeToData(name, value) {
    value = JSON.stringify(value);
    if (this.data === null) {
      this.data = {};
    }
    this.data[name] = value;
    localStorage.setItem(name, value);
  }

  getAttributeFromData(name) {
    let result = null;
    if (this.data !== null) {
      result = this.data[name];
    }

    if (result === undefined || result === null) {
      result = this.getAttributeFromLocalStorage(name);
    }
    result = result === undefined ? null : JSON.parse(result);
    return result;
  }

  private getAttributeFromLocalStorage(name) {
    if (this.data === null) {
      this.data = {};
    }
    const value = localStorage.getItem(name);
    this.data[name] = value;
    return value;
  }

  getData() {
    return this.data;
  }

  removeData() {
    localStorage.clear();
    this.data = null;
  }

  setDashboard(id) {
    this._dashboard = this.http.get('http://e3600.test/api/v1/rolePermissions/' + id);
  }

  getDashboard(): Observable<any> {
    return this._dashboard;
  }

  getPermissions(data): Observable<any> {
    return this.http.post('http://e3600.test/api/v1/modulePermissions/', data);
  }
}
