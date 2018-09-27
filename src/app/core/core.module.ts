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
import { BillCardComponent } from './components/bill-page/bill-card/bill-card.component';
import { CurrencyCardComponent } from './components/bill-page/currency-card/currency-card.component';
import { BillService } from './services/bill.service';
import { AddEventComponent } from './components/records-page/add-event/add-event.component';
import { AddCategoryComponent } from './components/records-page/add-category/add-category.component';
import { EditCategoryComponent } from './components/records-page/edit-category/edit-category.component';
@NgModule({
    imports: [CommonModule, SharedModule, CoreRoutingModule],
    declarations: [BillPageComponent, HistoryPageComponent,
         PlanningPageComponent, RecordsPageComponent, CoreComponent,
          SidebarComponent, HeaderComponent, DropdownDirective, BillCardComponent, CurrencyCardComponent, AddEventComponent, AddCategoryComponent, EditCategoryComponent],
          providers: [BillService]
})
export class CoreModule {

}