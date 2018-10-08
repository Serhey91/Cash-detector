import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'core-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.css']
})
export class CurrencyCardComponent implements OnInit {
  @Input() currency: any;
  currencies: Array<any>;
  date = new Date();
  constructor() { }

  ngOnInit() {
   this.currencies = this.currency.filter(item => item.ccy !== 'BTC');
  }

}
