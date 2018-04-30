import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class GenderService {

  constructor() { }

  loadGenders() {
    const url = 'api/v1/genders';
    return [{
      id: 1,
      gender: 'poesia',
    },
    {
      id: 2,
      gender: 'narrativa',
    }];
  }

  getGender() {
    return {
      id: 1,
      gender: 'poesia'
    };
  }

  createGender() {

  }

  saveGender(data: any) {
  }

  deleteGender(id) {

  }
}
