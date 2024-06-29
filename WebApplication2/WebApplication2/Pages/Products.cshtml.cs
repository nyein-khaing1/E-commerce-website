using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using WebApplication2.Models;

namespace WebApplication2.Pages
{
    public class ProductsModel : PageModel
    {
        public readonly AppDataContext _db;
        public List<Products> Products { get; set; }
        [BindProperty]
        public Products products { get; set; }

        public ProductsModel(AppDataContext db)
        {
            _db = db;
            Products = new List<Products>();
        }

        public void OnGet()
        {
            Products = _db.Products.ToList();
        }

        public IActionResult OnGetDelete(string Id)
        {
            _db.Remove(_db.Products.Find(Id));
            return RedirectToPage("admin");
        }
    }

}
