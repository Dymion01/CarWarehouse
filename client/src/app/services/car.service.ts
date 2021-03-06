import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../shared/models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars() : Observable<Car[]>{
    return this.http.get<Car[]>('https://localhost:5001/api/cars/getallcars')
  }
}
