import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../../common/models/category.model';
import { EventModel } from '../../../../common/models/event.model';

@Component({
  selector: 'core-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.css']
})
export class HistoryEventsComponent implements OnInit {
  @Input() allCategories: Category[] = [];
    @Input() allEvents: EventModel[] = [];
    searchValue = '';
    searchPlaceholder = 'Amount';
    searchField = 'amount';
  constructor() { }
  changeCriteria(filter: string) {
    const namesSearch = {
      amount: 'Amount',
      date: 'Date',
      category: 'Category',
      type: 'Type'
    };
this.searchPlaceholder = namesSearch[filter.toLowerCase()];
this.searchField = filter;
  }
  ngOnInit() {
  }

}
