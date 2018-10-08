import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailytaskComponent } from './dailytask/dailytask.component';
import { WeeklytaskComponent } from './weeklytask/weeklytask.component';
import { MonthlytaskComponent } from './monthlytask/monthlytask.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DailytaskComponent,
        WeeklytaskComponent,
        MonthlytaskComponent
    ]
})
export class TasksModule{}