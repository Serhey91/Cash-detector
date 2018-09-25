import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component/core.component';
import { BillPageComponent } from './components/bill-page/bill-page.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { PlanningPageComponent } from './components/planning-page/planning-page.component';
import { RecordsPageComponent } from './components/records-page/records-page.component';
const routes: Routes = [
    {path: 'core', component: CoreComponent, children: [
        {path: 'bill', component: BillPageComponent},
        {path: 'history', component: HistoryPageComponent},
        {path: 'planning', component: PlanningPageComponent},
        {path: 'records', component: RecordsPageComponent},
    ] }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {

}