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
import { CategoriesService } from './services/category.service';
import { EventsService } from './services/events.service';
import { HistoryChartComponent } from './components/history-page/history-chart/history-chart.component';
import { HistoryDetailsComponent } from './components/history-page/history-details/history-details.component';
import { HistoryEventsComponent } from './components/history-page/history-events/history-events.component';
import { HistoryFilterComponent } from './components/history-page/history-filter/history-filter.component';
import { SearchPipe } from './pipes/search.pipe';
@NgModule({
    imports: [CommonModule, SharedModule, CoreRoutingModule],
    declarations: [BillPageComponent, HistoryPageComponent,
         PlanningPageComponent, RecordsPageComponent, CoreComponent,
          SidebarComponent, HeaderComponent,
           DropdownDirective, BillCardComponent, CurrencyCardComponent,
            AddEventComponent, AddCategoryComponent, EditCategoryComponent,
             HistoryChartComponent, HistoryDetailsComponent, HistoryEventsComponent, HistoryFilterComponent, SearchPipe],
          providers: [BillService, CategoriesService, EventsService]
})
export class CoreModule {

}