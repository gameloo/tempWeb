import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from './models/user';
import { Group } from './models/group';

@Component({
    selector: 'app',
    templateUrl: './app.clientPageComponent.html',
    providers: [DataService]
})

export class AppClientPageComponent implements OnInit {

    user: User = new User();
    users: User[];
    group: Group = new Group();
    groups: Group[];
    tableMode: boolean = true;          // табличный режим

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getGroups().subscribe((data: Group[]) => this.groups = data);
        this.loadUsers();    // загрузка данных при старте компонента  
    }

    loadUsers() {
        this.dataService.getUsers()
            .subscribe((data: User[]) => this.users = data);
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
        this.group = new Group();
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

