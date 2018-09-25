import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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