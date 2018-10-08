import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeToggle } from '../../common/animations/opacity.animation';
import { Title } from '../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
  animations: [fadeToggle]
})
export class CoreComponent implements OnInit {
  @HostBinding('@fade') flag = true;
  constructor(private title: Title) {
    title.setTitle('Your counting app');
   }

  ngOnInit() {
  }

}
