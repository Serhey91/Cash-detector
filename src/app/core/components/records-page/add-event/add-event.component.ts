import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../../common/models/category.model';
import { NgForm } from '@angular/forms';
import { EventModel } from '../../../../common/models/event.model';
import { EventsService } from '../../../services/events.service';
import { BillService } from '../../../services/bill.service';
import { Bill } from '../../../services/bill.model';
import {mergeMap} from 'rxjs/operators';
import { Message } from '../../../../common/models/message.model';
@Component({
  selector: 'core-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  @Input() categoriesListForEvent: Category[];
  types = [
    {path: 'income', label: 'Profit'}
    , {path: 'outcome', label: 'Loss'}
  ];
  message: Message;
  constructor(
     private eventsService: EventsService,
     private billService: BillService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    // Деструктуризация элементов полей формы
    let {amount, description, category, type } = form.value;
    // Проверка ввода на отрицательное число
    if (amount < 0) {amount *= -1; }
    // Создние нового события( НЕ EVENT - а денежное событие) - с передачей парметров
    const event = new EventModel(type, amount, category, (new Date).toLocaleString(), description);
    // Вызов метода для получение текущего денежного счета
    this.billService.getBill().subscribe((bill: Bill) => {
      // создание промежуточной переменной
      let value = 0;
      // Проверка расхода
      if (type === 'outcome') {
        // Проверка - больше ли расход нашего счета
        if (amount > bill.value) {
          // Генерация ошибки
          this.message = new Message('danger', `There are not enough funds on the account. You need ${amount - bill.value} UAH`);
          return;
        } else {
          // Если расход - меньше чем общий счет - вычитаем его
          value = bill.value - amount;
        }
        // Поверка дохода
      } else {
        value = bill.value + amount;
      }
      // Обновление счета на сервере
      this.billService.updateBill({value: value, currency: bill.currency})
      // добавление нового события на сервис и в БД
      .pipe(mergeMap(() => this.eventsService.addEvent(event))).subscribe(() => {
        // Новая иницализация формы после отправки на сервер счета
        form.form.patchValue({
          category: '',
          type: 'outcome',
          amount: 1,
          description: ' '
        });
        // Вывод сообщения об успешном завершении
        this.message = new Message('success', 'New event was successfully created');
        // Прячем сообщение
        setTimeout(() => {this.message = null; }, 2000);
      });
    });
  }
}
