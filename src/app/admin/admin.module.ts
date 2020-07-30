import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ChartsModule } from 'ng2-charts';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
    declarations: [
        DashboardComponent,
        NavBarComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        ChartsModule
    ],
    exports: []
})
export class AdminModule { }
