import { Component, OnInit } from '@angular/core';
import { BillService } from '../../services/bill.service';
import { CategoriesService } from '../../services/category.service';
import { EventsService } from '../../services/events.service';
import { combineLatest } from 'rxjs';
import { Bill } from '../../services/bill.model';
import { Category } from '../../../common/models/category.model';
import { EventModel } from '../../../common/models/event.model';

@Component({
  selector: 'app-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.css']
})
export class PlanningPageComponent implements OnInit {
  isLoaded = false;
  bill: Bill;
  categories: Category[] = [];
  events: EventModel[] = [];
  constructor(private billService: BillService,
    private categoriesService: CategoriesService,
  private eventsService: EventsService) { }

  ngOnInit() {
combineLatest(this.billService.getBill(),
this.categoriesService.getAllCategories(),
this.eventsService.getEvents()).subscribe((data: [Bill, Category[], EventModel[]]) => {
this.bill = data[0];
this.categories = data[1];
this.events = data[2];
this.isLoaded = true;
console.log(this.bill);
console.log(this.categories);
console.log(this.events);
});
  }
  getCategoryCost(cat: Category): number {
const categoryEvents = this.events.filter(event =>
  event.category === cat.categoryName && event.type === 'outcome'
);

return categoryEvents.reduce((total, event) => {total += event.amount; return total; }, 0);
  }
  getCategoryPercent(category: Category): string {
return this.getPercent(category) + '%';
  }
 private getPercent(category: Category): number {
const percent = 100 * this.getCategoryCost(category) / category.capacity;
return percent > 100 ? 100 : percent;
  }
  getCategoryClass(category: Category): string {
    const percent = this.getPercent(category);
    const className = (percent < 60) ? 'success' : (percent >= 95) ? 'danger' : 'warning';
    return className;
  }
}
