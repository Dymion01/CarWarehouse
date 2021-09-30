import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CARS } from '../app/shared/mocks/mock-cars';
import { CarsListComponent } from '../app/cars-list/cars-list.component'
import { HeaderComponent } from './header/header.component';
import { Car } from './shared/models/car.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  cars: any;
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    // this.cars = CARS; 
  }
  
 }
