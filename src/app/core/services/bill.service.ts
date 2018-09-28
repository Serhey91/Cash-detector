import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Bill } from './bill.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseApi } from '../../common/models/base-api';

@Injectable()
export class BillService extends BaseApi {
    urlBill = 'bill';
urlCurrency = ' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
    // https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json
    // https://bank.gov.ua/control/en/publish/article?art_id=25365630

   // https://www.liqpay.ua/documentation/en/api/public/exchange
constructor(public http: Http) {
    super(http);
}
// getBill(): Observable<Bill> {
//     return this.http.get(this.urlBill)
// .pipe(map((response: Response) => {
//     return response.json();
// }));
// }


getBill(): Observable<Bill> {
  return this.get('bill');
}

getCurrency(): Observable<any> {
return this.http.get(this.urlCurrency).pipe(map((response: Response) => {
    return response.json();
}));
}
updateBill(bill: Bill): Observable<Bill> {
return this.put('bill', bill);
}
}