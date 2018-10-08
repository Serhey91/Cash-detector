import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeToggle } from '../../common/animations/opacity.animation';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  animations: [fadeToggle]
})
export class AuthenticationComponent implements OnInit {
  @HostBinding('@fade') flag = true;
  constructor() { }

  ngOnInit() {
  }

}
