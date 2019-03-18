import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from './models/user';
import { Group } from './models/group';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './app.clientPageComponent.html',
    providers: [DataService]
})

export class AppClientPageComponent implements OnInit {

    user: User = new User();
    users: User[];
    groups: Group[];
    tableMode: boolean = true;          // табличный режим

    constructor(private dataService: DataService, private router: Router) { }

    ngOnInit() {
        this.loadUsers();    // загрузка данных при старте компонента  
    }

    navigateToClientInfoPage(user: User) {
        this.router.navigate(
            ['/userInfo'],
            {
                queryParams: { 'id': user.id }  
            }
        );
    }

    loadUsers() {
        this.dataService.getUsers()
            .subscribe((data: User[]) => this.users = data);
    }

    getGroupName(id: number) {
        if (this.groups == null) {
            this.dataService.getGroups().subscribe((data: Group[]) => {
                this.groups = data;
                let tempGroup = this.groups.find((data: Group) => data.id == id);
                if (tempGroup != undefined) return tempGroup.name;
                else return "-";
            });
        }
        else {
            let tempGroup = this.groups.find((data: Group) => data.id == id);
            if (tempGroup != undefined) return tempGroup.name;
            else return "-";
        }
    }

    save() {
        if (this.user.id == null) {
            this.dataService.createUser(this.user)
                .subscribe(data => this.loadUsers());
        } else {
            this.dataService.updateUser(this.user)
                .subscribe(data => this.loadUsers());
        }
        this.cancel();
    }

    editUser(p: User) {
        this.user = p;
    }

    cancel() {
        this.user = new User();
        this.tableMode = true;
    }

    delete(p: User) {
        this.dataService.deleteUser(p.id)
            .subscribe(data => this.loadUsers());
    }

    add() {
        this.cancel();
        this.tableMode = false;
    }
}

