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
import { Group } from './models/group';
var AppGroupPageComponent = /** @class */ (function () {
    function AppGroupPageComponent(dataService) {
        this.dataService = dataService;
        this.group = new Group();
        this.tableMode = true; // табличный режим
    }
    AppGroupPageComponent.prototype.ngOnInit = function () {
        this.loadGroups(); // загрузка данных при старте компонента  
    };
    // получаем данные через сервис
    AppGroupPageComponent.prototype.loadGroups = function () {
        var _this = this;
        this.dataService.getGroups()
            .subscribe(function (data) { return _this.groups = data; });
    };
    // сохранение данных
    AppGroupPageComponent.prototype.save = function () {
        var _this = this;
        if (this.group.id == null) {
            this.dataService.createGroup(this.group)
                .subscribe(function (data) { return _this.loadGroups(); });
        }
        else {
            this.dataService.updateGroup(this.group)
                .subscribe(function (data) { return _this.loadGroups(); });
        }
        this.cancel();
    };
    AppGroupPageComponent.prototype.editGroup = function (p) {
        this.group = p;
    };
    AppGroupPageComponent.prototype.cancel = function () {
        this.group = new Group();
        this.tableMode = true;
    };
    AppGroupPageComponent.prototype.delete = function (p) {
        var _this = this;
        this.dataService.deleteGroup(p.id)
            .subscribe(function (data) { return _this.loadGroups(); });
    };
    AppGroupPageComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    AppGroupPageComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.groupPageComponent.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], AppGroupPageComponent);
    return AppGroupPageComponent;
}());
export { AppGroupPageComponent };
//# sourceMappingURL=app.groupPageComponent.js.map