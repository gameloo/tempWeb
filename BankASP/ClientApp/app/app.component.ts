import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Group } from './group';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})
export class AppComponent implements OnInit {

    group: Group = new Group();
    groups: Group[];
    tableMode: boolean = true;          // табличный режим

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadGroups();    // загрузка данных при старте компонента  
    }
    // получаем данные через сервис
    loadGroups() {
        this.dataService.getGroups()
            .subscribe((data: Group[]) => this.groups = data);
    }
    // сохранение данных
    save() {
        if (this.group.id == null) {
            this.dataService.createGroup(this.group)
                .subscribe(data => this.loadGroups());
        } else {
            this.dataService.updateGroup(this.group)
                .subscribe(data => this.loadGroups());
        }
        this.cancel();
    }
    editGroup(p: Group) {
        this.group = p;
    }
    cancel() {
        this.group = new Group();
        this.tableMode = true;
    }
    delete(p: Group) {
        this.dataService.deleteGroup(p.id)
            .subscribe(data => this.loadGroups());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}