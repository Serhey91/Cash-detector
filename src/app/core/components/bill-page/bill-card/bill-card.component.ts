import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../../../services/bill.model';

@Component({
  selector: 'core-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.css']
})
export class BillCardComponent implements OnInit {
  @Input() bill: Bill;
  @Input()  currency: any;
  dollarObj: any;
  euroObj: any;
  dollarPrice: number;
  euroPrice: number;
  constructor() { }

  ngOnInit() {
    this.dollarObj = this.currency.filter((item) => item.ccy === 'USD');
    this.euroObj = this.currency.filter((item) => item.ccy === 'EUR');   
    this.dollarPrice = this.bill.value / +this.dollarObj[0].buy;
    this.euroPrice = this.bill.value / +this.euroObj[0].buy;
  }

}
