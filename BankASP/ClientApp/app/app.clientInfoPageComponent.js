var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRoute } from '@angular/router';
var AppClientInfoPageComponent = /** @class */ (function () {
    function AppClientInfoPageComponent(dataService, route) {
        var _this = this;
        this.dataService = dataService;
        this.route = route;
        this.routeSubscription = route.queryParams.subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    AppClientInfoPageComponent.prototype.ngOnInit = function () {
        this.loadHistory();
    };
    AppClientInfoPageComponent.prototype.loadHistory = function () {
        var _this = this;
        this.dataService.getHistory(this.id).subscribe(function (data) {
            return _this.histories = data;
        });
    };
    AppClientInfoPageComponent.prototype.getGroupName = function (id) {
        console.error(id);
        this.dataService.getGroup(id).subscribe(function (data) { return data.name; });
    };
    AppClientInfoPageComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.clientInfoPageComponent.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService, ActivatedRoute])
    ], AppClientInfoPageComponent);
    return AppClientInfoPageComponent;
}());
export { AppClientInfoPageComponent };
//# sourceMappingURL=app.clientInfoPageComponent.js.map