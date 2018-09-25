import { Component, OnInit } from '@angular/core';
import { User } from '../../../common/models/user.model';
import { AuthenticationService } from '../../../common/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private date: Date = new Date();
  user: User;
  constructor(private authenticatedService: AuthenticationService,
  private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('response'));
  }
  onLogOut() {
    this.authenticatedService.logOut();
    this.router.navigate(['/login']);
  }
}
