import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import {map, delay} from 'rxjs/operators';
import { BaseApi } from '../models/base-api';
@Injectable()
export class UserService extends BaseApi {
    constructor(public http: Http) {
        super(http);
    }
// old methods 
//     getUserByEmail(email: string): Observable<User> {
// return this.http.get(`${this.url}/users?email=${email}`).pipe(
//     map((response: Response) => {return response.json();
//     }), delay(2000),
//     map((user: User[]) => user[0] ? user[0] : undefined));    }
  // createNewUser(user: User): Observable<User> {
    //         return this.http.post(`${this.url}/users`, user).pipe(
    //             map((response: Response) => response.json())
    //         );
    // }

    // refactoring
    getUserByEmail(email: string): Observable<User> {
        return this.get(`users?email=${email}`).pipe(delay(1000), map((users: User[]) =>
    users[0] ? users[0] : undefined
    ));   }



  
    createNewUser(user: User): Observable<User> {
        return this.post(`users`, user).pipe(delay(2000));
}
}