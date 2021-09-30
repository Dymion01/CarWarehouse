using API.Data;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repositories
{
    public class CarRepository : ICarRepository
    {
        private readonly AppDbContext _context;

        public CarRepository(AppDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Car> GetAllCars()
        {
            IEnumerable<Car> cars = _context.Cars;
            return cars;
        }
    }
}
