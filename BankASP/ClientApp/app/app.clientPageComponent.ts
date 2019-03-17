import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'app',
    templateUrl: './app.clientPageComponent.html',
    providers: [DataService]
})

export class AppClientPageComponent { }

