import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

import {Person} from './person';

@Injectable()
export class AppService {

    searchUrl: string = 'http://localhost:3004/persons';

    constructor(private http: Http) { }
    
      search (term: string): Observable<Person[]> {
      let params = new URLSearchParams();
      params.set('firstName_like', term);
      let a = this.http
            .get(this.searchUrl, { search: params })
            .map(response => response.json())
      return a;
  }

}