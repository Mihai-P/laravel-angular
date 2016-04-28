var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var RestService = (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.prototype.search = function (term) {
        var search = new http_1.URLSearchParams();
        search.set('text', term);
        return this.http
            .get('http://lararest.2ezweb.com.au/', { search: search })
            .map(function (request) { return request.json(); });
    };
    RestService = __decorate([
        core_1.Injectable()
    ], RestService);
    return RestService;
})();
exports.RestService = RestService;
//# sourceMappingURL=rest-service.js.map