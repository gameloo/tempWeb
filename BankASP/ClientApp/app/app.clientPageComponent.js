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
import { User } from './models/user';
import { Group } from './models/group';
var AppClientPageComponent = /** @class */ (function () {
    function AppClientPageComponent(dataService) {
        this.dataService = dataService;
        this.user = new User();
        this.group = new Group();
        this.tableMode = true; // табличный режим
    }
    AppClientPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getGroups().subscribe(function (data) { return _this.groups = data; });
        this.loadUsers(); // загрузка данных при старте компонента  
    };
    AppClientPageComponent.prototype.loadUsers = function () {
        var _this = this;
        this.dataService.getUsers()
            .subscribe(function (data) { return _this.users = data; });
    };
    AppClientPageComponent.prototype.save = function () {
        var _this = this;
        if (this.user.id == null) {
            this.dataService.createUser(this.user)
                .subscribe(function (data) { return _this.loadUsers(); });
        }
        else {
            this.dataService.updateUser(this.user)
                .subscribe(function (data) { return _this.loadUsers(); });
        }
        this.cancel();
    };
    AppClientPageComponent.prototype.editUser = function (p) {
        this.user = p;
    };
    AppClientPageComponent.prototype.cancel = function () {
        this.group = new Group();
        this.user = new User();
        this.tableMode = true;
    };
    AppClientPageComponent.prototype.delete = function (p) {
        var _this = this;
        this.dataService.deleteUser(p.id)
            .subscribe(function (data) { return _this.loadUsers(); });
    };
    AppClientPageComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    AppClientPageComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.clientPageComponent.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], AppClientPageComponent);
    return AppClientPageComponent;
}());
export { AppClientPageComponent };
//# sourceMappingURL=app.clientPageComponent.js.map