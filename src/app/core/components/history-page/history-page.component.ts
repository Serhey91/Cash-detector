import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/category.service';
import { EventModel } from '../../../common/models/event.model';
import { EventsService } from '../../services/events.service';
import { Category } from '../../../common/models/category.model';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  isFilterVisible = false;
  isLoaded = false;
  isData = false;
  constructor(private categoryService: CategoriesService,
    private eventsService: EventsService) { }
    allCategories: Category[] = [];
    allEvents: EventModel[] = [];
    allDataForChart = [];
    filteredEvents: EventModel[] = [];
    ngOnInit() {
      this.getInfoFromServer();

    }
    onRefresh() {
      this.isLoaded = false;
      this.getInfoFromServer();
    }
    getInfoFromServer() {
      combineLatest(
        this.categoryService.getAllCategories(),
      this.eventsService.getEvents()).subscribe((data: [Category[], EventModel[]]) => {
        this.allCategories = data[0];
        this.allEvents = data[1];

        this.setOriginalEvents();
        this.calculateChartData();
this.isLoaded = true;
  });
}
calculateChartData(): void {
  this.allDataForChart = [];
  this.allCategories.forEach((cat: Category) => {
    const categoryEvents = this.filteredEvents.filter((event: EventModel) =>
      event.category === cat.categoryName && event.type === 'outcome'
    );
    this.allDataForChart.push({
      name: cat.categoryName,
      value: categoryEvents.reduce((total, event) => {total += event.amount; return total; }, 0)  });
  });

  if (this.allDataForChart.reduce((total, data) => {total += data.value; return total; }, 0) !== 0) {
    this.isData = true;
  }
}
openFilter() {
 this.toggleFilterVisibility(true);
}
private toggleFilterVisibility(flag: boolean): void {
this.isFilterVisible = flag;
}
FilterCancel() {
  this.toggleFilterVisibility(false);
  this.setOriginalEvents();
  this.calculateChartData();
}
FilterApply(dataFromFilter) {
  this.toggleFilterVisibility(false);
  this.setOriginalEvents();
  this.filteredEvents = this.filteredEvents.filter((event) => {
  return dataFromFilter.types.indexOf(event.type) !== -1;
  }).filter((event) => {
  return dataFromFilter.categories.indexOf(event.category) !== -1;
});
this.calculateChartData();

}
private setOriginalEvents() {
  this.filteredEvents = this.allEvents.slice();
}
}
