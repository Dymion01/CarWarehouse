using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Warehouse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Location Location { get; set; }
        public string CarsLocation { get; set; }
        public IEnumerable<Car> Cars {get; set;} 
    }
}
