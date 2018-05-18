import { Injectable } from '@angular/core';

@Injectable()
export class InformationService {

  private data: any;

  constructor() {
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
}
