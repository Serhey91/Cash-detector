import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BaseApi {
    private baseUrl = 'http://localhost:3300/';
    constructor(public http: Http) {

    }
private getUrl(url: string = ''): string {
return this.baseUrl + url;
}
public get(url: string = ''): Observable<any> {
return this.http.get(this.getUrl(url)).pipe(map((response: Response) => response.json()));
}
public post(url: string = '', data: any = {}): Observable<any> {
    return this.http.post(this.getUrl(url), data).pipe(map((response: Response) => response.json()));
    }
    public put(url: string = '', data: any = {}): Observable<any> {
        return this.http.put(this.getUrl(url), data).pipe(map((response: Response) => response.json()));
        }
}