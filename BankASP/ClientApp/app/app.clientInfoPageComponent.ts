import { History } from './models/history';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Group } from './models/group';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
import { forEach } from '@angular/router/src/utils/collection';
import { resolve } from 'path';

@Component({
    selector: 'app-info',
    templateUrl: './app.clientInfoPageComponent.html',
    providers: [DataService]
})

export class AppClientInfoPageComponent implements OnInit {
    private id: number;
    histories: History[];
    groups: Array<Group>;

    private routeSubscription: Subscription;
    constructor(private dataService: DataService, private route: ActivatedRoute) {
        this.routeSubscription = route.queryParams.subscribe(
            params => {
                this.id = params['id'];
            }
        );
    }

    ngOnInit() {
        this.loadHistory();
    }

    loadHistory() {
        this.dataService.getHistory(this.id)
            .subscribe((data: History[]) => {
                this.histories = data;
            });
    }

    getGroupName(id: number) {
        console.error("group_name not set") 
    }
}