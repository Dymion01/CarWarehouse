using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface ICarService
    {
        IEnumerable<Car> GetCars();
    }
}
