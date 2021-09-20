import { Car } from '../models/car.model';

export const CARS: Car[] =[
    {
        id: 1,
        make: "Volkswagen",
        model: "Jetta III",
        year_model: 1995,
        price: 12947.52,
        licensed: true,
        date_added: new Date(2018/9/18),
        warehouse: "A"
      },
      {
        id: 2,
        make: "Chevrolet",
        model: "Corvette",
        year_model: 2004,
        price: 20019.64,
        licensed: true,
        date_added: new Date(2018/1/27),
        warehouse: "A"
      },
      {
        id: 3,
        make: "Ford",
        model: "Expedition EL",
        year_model: 2008,
        price: 27323.42,
        licensed: false,
        date_added: new Date(2018-7-3),
        warehouse: "A"
      },
      {
        id: 4,
        make: "Infiniti",
        model: "FX",
        year_model: 2010,
        price: 8541.62,
        licensed: true,
        date_added: new Date(2018/3/23),
        warehouse: "A"
      },
      {
        id: 5,
        make: "GMC",
        model: "Safari",
        year_model: 1998,
        price: 14772.5,
        licensed: false,
        date_added: new Date(2018/7/4),
        warehouse: "A"
      }
]