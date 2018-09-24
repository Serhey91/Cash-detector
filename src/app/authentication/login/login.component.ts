import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { UserService } from '../../common/services/user.service';
import { User } from '../../common/models/user.model';
import { Message } from '../../common/models/message.model';
import { AuthenticationService } from '../../common/services/authentication.service';
import { Router, ActivatedRoute, Params} from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private formLogin: FormGroup;
errorMessage: Message;
constructor(private userService: UserService, private authService: AuthenticationService,
  private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.errorMessage = new Message('danger', null);
    this.route.queryParams.subscribe((params: Params) => {
      console.log(params);
if (params['nowCanLogin']) {
  this.showMessage({text: 'Now you can go to the system', type: 'success'});
}
    });
    this.formLogin = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

  }
  private showMessage(message: Message) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage.text = null;
    }, 3000);
  }
  onSubmit() {
    const formData = this.formLogin.value;
    this.userService.getUserByEmail(formData.email).subscribe((response: User) => {
      if (response) {
        if (response.password === formData.password) {
          this.errorMessage.text = '';
          localStorage.setItem('response', JSON.stringify(response));
          this.authService.logIn();
          // this.router.navigate('some-page');
        } else {
          this.showMessage({text: 'Wrong password', type: 'danger'});
        }
      } else {this.showMessage({text: 'There is no such user', type: 'danger'}); }
    });
  }
}