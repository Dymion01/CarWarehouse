using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class CarDto
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public int YearModel { get; set; }
        public int Price { get; set; }
        public bool Licensed { get; set; }
        public DateTime DateAdded { get; set; }
        public string Warehouse { get; set; }
    }
}
