import {Injectable} from 'angular2/core';
import {URLSearchParams, Http, Response} from 'angular2/http';

@Injectable()
export class RestService {
    constructor(private http: Http) {

    }

    search (term: string) {
        var search = new URLSearchParams()
        search.set('text', term);
        return this.http
            .get('http://lararest.2ezweb.com.au/', { search })
            .map((request) => request.json());
    }
}