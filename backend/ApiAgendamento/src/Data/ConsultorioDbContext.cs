using Microsoft.EntityFrameworkCore;
using Models;

namespace Data
{
  public class ConsultorioDbContext : DbContext
  {
    public DbSet<User> users { get; set; }
    public DbSet<Service> services { get; set; }
    public DbSet<Agenda> agenda { get; set; }
    public DbSet<Role> roles { get; set; }

    public ConsultorioDbContext(DbContextOptions<ConsultorioDbContext> options) : base(options) { }
  }
}