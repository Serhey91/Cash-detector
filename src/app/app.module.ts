import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './common/services/user.service';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from './common/services/authentication.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthGuard } from './common/services/auth.guard';
import { NotFoundComponent } from './common/not-found/not-found.component';
// import { CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    AppComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, AuthenticationModule, HttpModule,
    BrowserAnimationsModule

  ],
  providers: [UserService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
