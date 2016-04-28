import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Control} from 'angular2/common';
import {HTTP_PROVIDERS} from 'angular2/http';
import {App} from './app';
import {RestService} from './rest-service'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'my-app',
    template: `
    <div>
        <div class="form-group">
            <label for="term">Search</label>
            <input type="text" [ngFormControl]="term" class="form-control" id="term" placeholder="Start Typing" />
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Make</th>
                    <th>Year</th>
                    <th>Colour</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#item of items | async">
                    <td>{{item['id']}}</td>
                    <td>{{item['make']}}</td>
                    <td>{{item['year']}}</td>
                    <td>{{item['colour']}}</td>
                </tr>
            </tbody>
        </table>
    </div>
  `
})
export class App {
    items: Observable<Array<string>>;
    term = new Control();
    constructor(private restService: RestService) {
        this.items = this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.restService.search(term));
    }
}

bootstrap(App, [RestService, HTTP_PROVIDERS]).catch(err => console.error(err));
