var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var http_1 = require('angular2/http');
var app_1 = require('./app');
var rest_service_1 = require('./rest-service');
require('rxjs/add/operator/map');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
var App = (function () {
    function App(restService) {
        var _this = this;
        this.restService = restService;
        this.term = new common_1.Control();
        this.items = this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.restService.search(term); });
    }
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div>\n        <div class=\"form-group\">\n            <label for=\"term\">Search</label>\n            <input type=\"text\" [ngFormControl]=\"term\" class=\"form-control\" id=\"term\" placeholder=\"Start Typing\" />\n        </div>\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>Id</th>\n                    <th>Make</th>\n                    <th>Year</th>\n                    <th>Colour</th>\n                    <th>Variant</th>\n                    <th>Badge</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"#item of items | async\">\n                    <td>{{item['id']}}</td>\n                    <td>{{item['make']}}</td>\n                    <td>{{item['year']}}</td>\n                    <td>{{item['colour']}}</td>\n                    <td>{{item['variant']}}</td>\n                    <td>{{item['badge']}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n  "
        })
    ], App);
    return App;
})();
exports.App = App;
browser_1.bootstrap(app_1.App, [rest_service_1.RestService, http_1.HTTP_PROVIDERS]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=app.js.map