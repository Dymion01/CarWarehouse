import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Car } from '../shared/models/car.model';
import { CARS } from '../shared/mocks/mock-cars';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

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





