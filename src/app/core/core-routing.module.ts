import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component/core.component';
import { BillPageComponent } from './components/bill-page/bill-page.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { PlanningPageComponent } from './components/planning-page/planning-page.component';
import { RecordsPageComponent } from './components/records-page/records-page.component';
import { HistoryDetailsComponent } from './components/history-page/history-details/history-details.component';
import { AuthGuard } from '../common/services/auth.guard';
const routes: Routes = [
    {path: '', component: CoreComponent, canActivate: [AuthGuard], children: [
        {path: '', redirectTo: 'bill', pathMatch: 'full'},
        {path: 'bill', component: BillPageComponent},
        {path: 'history', component: HistoryPageComponent},
        {path: 'planning', component: PlanningPageComponent},
        {path: 'records', component: RecordsPageComponent},
        {path: 'history/:id', component: HistoryDetailsComponent},
    ] }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {

}