import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './common/services/user.service';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from './common/services/authentication.service';
import { CoreModule } from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, AuthenticationModule, HttpModule, CoreModule,
    BrowserAnimationsModule

  ],
  providers: [UserService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
