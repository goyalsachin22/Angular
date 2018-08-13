import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'
import { TestModule } from './temp.module'


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component'
import { EmployeeListComponent } from './employee/employeeList.component'
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe'
import { EmployeeCountComponent } from './employee/employeeCount.component'
import { SimpleComponent } from './Other/simple.component'
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './Other/pageNotFound.component'
import { componentFactoryName } from '../../node_modules/@angular/compiler';
import { EmployeeService } from "./employee/employee.service"
import { userPreferencesService } from './employee/userPreferences.service'
import { BootstrapComponent } from './bootstrap/Bootstrap.componenet';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'bootstrap', component: BootstrapComponent },
    { path: 'employees/:code', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes), TestModule],
    declarations: [AppComponent,
        EmployeeComponent,
        EmployeeListComponent,
        EmployeeTitlePipe,
        EmployeeCountComponent,
        SimpleComponent,
        HomeComponent,
        BootstrapComponent,
        PageNotFoundComponent],
    bootstrap: [AppComponent],
    providers: [EmployeeService]
})
export class AppModule { }
