import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AppClientPageComponent } from './app.clientPageComponent';
import { AppGroupPageComponent } from './app.groupPageComponent';

const appRoutes: Routes = [
    { path: '', component: AppClientPageComponent },
    { path: 'groups', component: AppGroupPageComponent }
    ,
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, AppClientPageComponent, AppGroupPageComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }