using API.DTOs;
using API.Models;
using API.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class CarsController : BaseApiController
    {
        private ICarService _carService;
        
        public CarsController(ICarService carService)
        {
            _carService = carService;
        }

        [HttpGet("getallcars")]
        public IEnumerable<CarDto> GetAllCars()
        {
            var cars = _carService.GetCars();
            //var carsDto = cars.Select(x => new CarDto
            //{
            //    Make = x.Make,
            //    Model = x.Model,
            //    YearModel = x.YearModel,
            //    Price = x.Price,
            //    Licensed = x.Licensed,
            //    DateAdded = x.DateAdded,
            //    Warehouse = x.Warehouse.Name
            //});
            IEnumerable<CarDto> carsDto = new List<CarDto>()
            {
              new CarDto(){Make = "Ford", Model = "model 1", YearModel= 2021, Licensed = true, Price=111000, DateAdded= DateTime.Today, Warehouse = "A"},
              new CarDto(){Make = "Ford", Model = "Fokus", YearModel= 2001, Licensed = false, Price=12345, DateAdded= DateTime.Today, Warehouse = "B"}
            };
            return carsDto;
            
        }
    }
}
