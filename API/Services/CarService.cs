using API.Models;
using API.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public class CarService : ICarService
    {
        private IUnitOfWork _unitOfWork;
        public CarService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IEnumerable<Car> GetCars()
        {
            IEnumerable<Car> cars = _unitOfWork.CarRepository.GetAllCars();
            return cars;
        }



    }
}
