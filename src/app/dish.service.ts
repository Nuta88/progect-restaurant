import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Dish} from './dish';

@Injectable()
export class DishService {

  private dishesUrl = 'api/dishes';
  headers: Headers;
  dish: Dish;


  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });
  }

  getDishes(): Promise<Dish[]> {
    return this.http.get(this.dishesUrl)
      .toPromise()
      .then(response => response.json().data as Dish[])
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.dishesUrl}/${id}`;

    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => url)
      .catch(this.handleError);
  }

  create(form: any): Promise<Dish> {
    return this.http
      .post(this.dishesUrl, JSON.stringify({name: form.name, imgURL: form.imgURL, price: form.price, calendar1: form.calendar1, calendar2: form.calendar2}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Dish)
      .catch(this.handleError);
  }


  update(form: any): Promise<Dish> {
    const url = `${this.dishesUrl}/${form.id}`;
    return this.http
      .put(url, JSON.stringify(form), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
