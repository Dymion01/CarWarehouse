using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repositories
{
    public interface IUnitOfWork : IDisposable
    {   
        ICarRepository CarRepository { get; }
        void Commit();
        void Rollback();
    }
}
