import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Restaurant } from '../interfaces/restaurant';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  AUTH_SERVER_ADDRESS:  string  =  'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  endPoint = "http://localhost:8080/api/restaurants"
 
  constructor(private httpClient: HttpClient) { }
  private getOptions(token){

    let bearerAccess = 'Bearer ' + token;

    let options = {
      headers: {
        'Authorization' : bearerAccess,
        'Content-Type' : 'application/x-www-form-urlencoded',
      }
      , withCredentials: true
    };

    return options;
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  } 
  
  getRestaurants(){
    return this.httpClient.get(this.endPoint)
  }

  getOneRestaurant(id: number) {
    return this.httpClient.get(this.endPoint + '/' + id)
    .pipe(
      tap(_=> console.log(`Restaurant fetched: ${id}`)),
      catchError(this.handleError<Restaurant>(`Get Restaurant id=${id}`))
    );
  }


  createRestaurant(restaurant, blob){
    let formData = new FormData();
    formData.append("name", restaurant.name);
    formData.append("direction", restaurant.direction);
    formData.append("CP", restaurant.CP);
    formData.append("category", restaurant.category);
    formData.append("file", blob);

    return this.httpClient.post(this.endPoint, formData);
  }

  deleteRestaurant(id){
    return this.httpClient.delete<Restaurant>(this.endPoint + '/' + id)
    .pipe(
      tap(_=> console.log(`Restaurant deleted ${id}`)),
      catchError(this.handleError<Restaurant>(`Delete Restaurant`))
    )
  }

  updateRestaurant(id, restaurant, blob){
    let data = new FormData();

    data.append("name", restaurant.name);
    data.append("direction", restaurant.direction);
    data.append("CP", restaurant.CP);
    data.append("category", restaurant.category);
    data.append("file", blob);

    return this.httpClient.put(this.endPoint + '/' + id, data)
  }

}
