import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

import {Entities} from '../model/entities';
import {Agents} from '../model/agent';

@Injectable()
export class AppService {

    searchUrl: string = 'http://localhost:3004/entities';

    constructor(private http: Http) { }
    
    searchEntity (term: string, nameField: string): Observable<Entities[]> {
        console.log('searchEntity', term, nameField);
        let params = new URLSearchParams();
        params.set(nameField+'_like', term);
        let a = this.http
              .get(this.searchUrl, { search: params })
              .map(response => response.json())
        return a;
    }

    searchAgent (term: string, nameField: string): Observable<Agents[]> {
        console.log('searchAgent', term, nameField);
        let params = new URLSearchParams();
        params.set(nameField+'_like', term);
        let a = this.http
              .get(this.searchUrl, { search: params })
              .map(response => response.json())
        return a;    
    }

}