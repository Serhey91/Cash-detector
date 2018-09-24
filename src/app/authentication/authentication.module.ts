import { NgModule } from '../../../node_modules/@angular/core';
import { CommonModule } from '../../../node_modules/@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SharedModule } from '../common/shared.module';

@NgModule({
    imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
declarations: [LoginComponent, RegistrationComponent, AuthenticationComponent]
})
export class AuthenticationModule {

}