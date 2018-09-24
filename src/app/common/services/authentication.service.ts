import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {
private isAuthenticated = false;
logIn() {
    this.isAuthenticated = true;
}
logOut() {
    this.isAuthenticated = false;
    localStorage.clear();
}
isLoggedIn(): boolean {
return this.isAuthenticated;
}
}