import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'core-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.css']
})
export class HistoryChartComponent implements OnInit {
  view: any[] = [500, 320];
  @Input() data;

  constructor() { }
  
  ngOnInit() {
  
  }

}
