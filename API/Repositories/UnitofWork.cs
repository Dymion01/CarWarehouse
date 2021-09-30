using API.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repositories
{
    public class UnitofWork : IUnitOfWork
    {
        private readonly AppDbContext _context;
        private CarRepository carRepository;
        public UnitofWork(AppDbContext context)
        {
            _context = context;
        }

        public ICarRepository CarRepository
        {
            get
            {
                if(carRepository == null)
                {
                    carRepository = new CarRepository(_context);
                }
                return carRepository;
            }
        }
        public void Commit()
        {
            _context.SaveChanges();

            if (_context.Database.CurrentTransaction != null)
            {
                _context.Database.CurrentTransaction.Commit();
            }
        }

        public void Rollback()
        {
            if (_context.Database.CurrentTransaction != null)
            {
                _context.Database.CurrentTransaction.Rollback();
            }
        }

        public void Dispose()
        {
            if (_context.Database.CurrentTransaction != null)
            {
                _context.Database.CurrentTransaction.Dispose();
            }

            if (_context != null)
            {
                _context.Dispose();
            }
        }
    }
}
