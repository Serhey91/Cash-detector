import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import {map, delay} from 'rxjs/operators';
@Injectable()
export class UserService {
    private url = 'http://localhost:3300';
    constructor(private http: Http) {

    }
   
    getUserByEmail(email: string): Observable<User> {
return this.http.get(`${this.url}/users?email=${email}`).pipe(
    map((response: Response) => {return response.json();
    }), delay(2000),
    map((user: User[]) => user[0] ? user[0] : undefined));    }
    createNewUser(user: User): Observable<User> {
            return this.http.post(`${this.url}/users`, user).pipe(
                map((response: Response) => response.json())
            );
    }
}