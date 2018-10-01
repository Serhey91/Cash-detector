import { Component, OnInit } from '@angular/core';
import { BillService } from '../../services/bill.service';
import { Bill } from '../../services/bill.model';
import {combineLatest} from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.css']
})
export class BillPageComponent implements OnInit {
  currency: any;
  bill: Bill;
  isLoaded = false;
  constructor(private billService: BillService) { }

  ngOnInit() {
    this.getInfoFromServer();
  }
  onRefresh() {
    this.isLoaded = false;
   this.getInfoFromServer();
  }
  // combineLatest - метод позволяет принимать несколько стримов одновременно
  getInfoFromServer() {
    combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe(((data: [any, Bill]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
    }));
  }
}
