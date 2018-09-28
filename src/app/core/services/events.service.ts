import {BaseApi} from '../../common/models/base-api';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { EventModel } from '../../common/models/event.model';
import { Observable } from 'rxjs';
@Injectable()
export class EventsService extends BaseApi {
    constructor(public http: Http) {
        super(http);
    }
    addEvent(event): Observable<EventModel> {
return this.post('events', event);
    }
    getEvents():Observable<EventModel[]> {
        return this.get('events');
    }
}