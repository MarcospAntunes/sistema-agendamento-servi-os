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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<User>()
        .Property(u => u.role_id)
        .ValueGeneratedOnAdd();
    }
    public ConsultorioDbContext(DbContextOptions<ConsultorioDbContext> options) : base(options) { }
  }
}