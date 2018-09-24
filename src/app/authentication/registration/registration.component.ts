import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { UserService } from '../../common/services/user.service';
import { User } from '../../common/models/user.model';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formRegister: FormGroup;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.formRegister = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail.bind(this)),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'name' : new FormControl(null, [Validators.required]),
      'agree' : new FormControl(false, [Validators.required, Validators.requiredTrue])
    });
  }
  onSubmit() {
    const {email, password, name} = this.formRegister.value;
    const userNew = new User(email, password, name);
    this.userService.createNewUser(userNew).subscribe((user: User) => {
      this.router.navigate(['/login'], {queryParams: {nowCanLogin: true}});
    });
  }
  // user validators
  forbiddenEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
    this.userService.getUserByEmail(control.value).subscribe((user: User) => {
if (user) {
resolve({forbiddenEmail : true});
} else {
  resolve(null);
}
    });
    });
  }

}
