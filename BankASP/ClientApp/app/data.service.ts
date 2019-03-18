import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from './models/group';
import { User } from './models/user';

@Injectable()
export class DataService {

    private groupUrl = "/api/groups";
    private userUrl = "/api/users";
    private historyUrl = "/api/history";

    constructor(private http: HttpClient) {
    }

    getGroups() {
        return this.http.get(this.groupUrl);
    }

    getGroup(id: number) {
        return this.http.get(`${this.groupUrl}/${id}`);
    }

    createGroup(group: Group) {
        return this.http.post(this.groupUrl, group);
    }
    updateGroup(group: Group) {
        return this.http.put(`${this.groupUrl}/${group.id}`, group);
    }
    deleteGroup(id: number) {
        return this.http.delete(`${this.groupUrl}/${id}`);
    }


    getUsers() {
        return this.http.get(this.userUrl);
    }

    createUser(user: User) {
        return this.http.post(this.userUrl, user);
    }

    updateUser(user: User) {
        return this.http.put(`${this.userUrl}/${user.id}`, user);
    }

    deleteUser(id: number) {
        return this.http.delete(`${this.userUrl}/${id}`);
    }


    getHistory(id_user: number) {
        return this.http.get(`${this.historyUrl}/${id_user}`);
    }
}