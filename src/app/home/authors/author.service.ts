import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthorService {

  private thirdToEditcached: any;

  constructor() { }

  loadAuthors() {
    const url = 'api/v1/authors';
    return [{
      name: 'pietro',
      lastName: 'Sanjines Angelaccio'
    },
    {
      name: 'pietro2',
      lastName: 'Sanjines Angelaccio2'
    }];
  }

  saveAuthor(data: any) {
  }
}
