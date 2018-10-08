import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Category } from '../../../../common/models/category.model';
@Component({
  selector: 'core-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.css']
})
export class HistoryFilterComponent implements OnInit {
  @Output() FilterCancel = new EventEmitter<any>();
  @Output() FilterApply = new EventEmitter<any>();
  @Input() categories: Category[] = [];
  selectedTypes = [];
  selectedCategories = [];
  typesCost = [
    {type: 'income', label: 'Profit'},
    {type: 'outcome', label: 'Loss'},
  ];
  constructor() { }

  ngOnInit() {
  }
  closeFilter() {
    this.selectedTypes = [];
    this.selectedCategories = [];
    this.FilterCancel.emit();
  }
  handleType(target) {
    const {checked, value} = target;
    this.CalcInputParams('selectedTypes', checked, value);
  }
  handleCategory(target) {
    const {checked, value} = target;
    this.CalcInputParams('selectedCategories', checked, value);
  }
  private CalcInputParams(field: string, checked: boolean, value: string) {
    if (checked) {
      this[field].indexOf(value) === -1 ? this[field].push(value) : null;
    } else {
      this[field] = this[field].filter((i) => i !== value);
    }
  }
  applyFilter() {
    this.FilterApply.emit({
      types: this.selectedTypes,
      categories: this.selectedCategories,
    });
  }
}
