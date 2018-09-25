import { NgModule } from '@angular/core';
import { CommonModule } from '../../../node_modules/@angular/common';
import { SharedModule } from '../common/shared.module';
import { CoreRoutingModule } from './Core-routing.module';
import { BillPageComponent } from './components/bill-page/bill-page.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { PlanningPageComponent } from './components/planning-page/planning-page.component';
import { RecordsPageComponent } from './components/records-page/records-page.component';
import { CoreComponent } from './core.component/core.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';
@NgModule({
    imports: [CommonModule, SharedModule, CoreRoutingModule],
    declarations: [BillPageComponent, HistoryPageComponent,
         PlanningPageComponent, RecordsPageComponent, CoreComponent,
          SidebarComponent, HeaderComponent, DropdownDirective]
})
export class CoreModule {

}