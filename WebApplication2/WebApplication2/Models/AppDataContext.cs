using Microsoft.EntityFrameworkCore;

namespace WebApplication2.Models
{
    public class AppDataContext : DbContext
    {
        public AppDataContext(DbContextOptions<AppDataContext> options) :
        base(options)
        { }
        public DbSet<Products> Products { get; set; }
    }
}
