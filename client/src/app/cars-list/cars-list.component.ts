import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Car } from '../shared/models/car.model';
import { CARS } from '../shared/mocks/mock-cars';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements AfterViewInit {
  @Input('ELEMENT_DATA')  ELEMENT_DATA!:  Car[];
  selectedCar?: Car;
  displayedColumns: string[] = ['make', 'model', 'year_model', 'price', 'licensed' ];
  // dataSource = new MatTableDataSource<Car>(this.ELEMENT_DATA);
  dataSource = new MatTableDataSource<Car>(CARS);
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}





