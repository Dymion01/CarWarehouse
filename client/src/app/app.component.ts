import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CARS } from '../app/shared/mocks/mock-cars';
import { CarsListComponent } from '../app/cars-list/cars-list.component'
import { Car } from './shared/models/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  cars: Car[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {
//    this.getCars()
    this.cars = CARS; 
    console.log(this.cars);
  }
  

//   getCars(){
//     this.http.get('https://api.jsonbin.io/b/5ebe673947a2266b1478d892').subscribe(response => {
//     this.cars = response;

//     }, error => {
//       console.log(error)
//     })
//   }
 }
