import { Injectable } from '@angular/core';
import { BaseApi } from '../../common/models/base-api';
import { Http } from '@angular/http';
import { Category } from '../../common/models/category.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
    export class CategoriesService extends BaseApi {
        constructor(public http: Http) {
            super(http);
        }
        addCategory(category: Category): Observable<Category> {
return this.post('categories', category);
        }
        getAllCategories(): Observable<Category[]> {
           return this.get('categories');
        }
        updateCategory(category: Category): Observable<Category> {
            return this.put(`categories/${category.id}`, category);
          }
          getCategoryById(id: number): Observable<Category> {
             return this.get(`categories/${id}`);
          }
    }