import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { Params } from '@angular/router';
import { EventsService } from '../../../services/events.service';
import { CategoriesService } from '../../../services/category.service';
import { mergeMap } from 'rxjs/operators';
import { EventModel } from '../../../../common/models/event.model';
import { Category } from '../../../../common/models/category.model';

@Component({
  selector: 'core-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.css']
})
export class HistoryDetailsComponent implements OnInit {
  eventDetail: EventModel;
  isLoaded = false;
  constructor(private route: ActivatedRoute, private eventsService: EventsService,
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.eventsService.getEventById(id).subscribe((event: EventModel) => {
      this.eventDetail = event;
      this.isLoaded = true;
    });

  }

}
