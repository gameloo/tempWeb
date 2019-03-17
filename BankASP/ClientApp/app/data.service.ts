import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from './models/group';

@Injectable()
export class DataService {

    private groupUrl = "/api/groups";
    private userUrl = "/api/users";
    private historyUrl = "/api/historys";

    constructor(private http: HttpClient) {
    }

    getGroups() {
        return this.http.get(this.groupUrl);
    }

    createGroup(group: Group) {
        return this.http.post(this.groupUrl, group);
    }
    updateGroup(group: Group) {

        return this.http.put(this.groupUrl + '/' + group.id, group);
    }
    deleteGroup(id: number) {
        return this.http.delete(this.groupUrl + '/' + id);
    }


    getUsers() {

    }

    createUser() {

    }

    updateUser() {

    }

    deleteUser() {

    }


    getHistory() {

    }

    createHistory() {

    }
}