var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.groupUrl = "/api/groups";
        this.userUrl = "/api/users";
        this.historyUrl = "/api/history";
    }
    DataService.prototype.getGroups = function () {
        return this.http.get(this.groupUrl);
    };
    DataService.prototype.getGroupsAll = function () {
        return this.http.get(this.groupUrl + "/all");
    };
    DataService.prototype.getGroup = function (id) {
        return this.http.get(this.groupUrl + "/" + id);
    };
    DataService.prototype.createGroup = function (group) {
        return this.http.post(this.groupUrl, group);
    };
    DataService.prototype.updateGroup = function (group) {
        return this.http.put(this.groupUrl + "/" + group.id, group);
    };
    DataService.prototype.deleteGroup = function (id) {
        return this.http.delete(this.groupUrl + "/" + id);
    };
    DataService.prototype.getUsers = function () {
        return this.http.get(this.userUrl);
    };
    DataService.prototype.createUser = function (user) {
        return this.http.post(this.userUrl, user);
    };
    DataService.prototype.updateUser = function (user) {
        return this.http.put(this.userUrl + "/" + user.id, user);
    };
    DataService.prototype.deleteUser = function (id) {
        return this.http.delete(this.userUrl + "/" + id);
    };
    DataService.prototype.getHistory = function (id_user) {
        return this.http.get(this.historyUrl + "/" + id_user);
    };
    DataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map