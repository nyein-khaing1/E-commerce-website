using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using WebApplication2.Models;
using Microsoft.EntityFrameworkCore;
namespace WebApplication2.Pages
{
    public class adminModel : PageModel
    {
        public adminModel(AppDataContext db)
        {
            _db = db;
        }

       

        public readonly AppDataContext _db;

        [BindProperty(SupportsGet = true)]
        public int Id { get; set; }

        [BindProperty]
        public Products Products { get; set; } = new Products();
        public void OnGet()
        {
            
        }

    public IActionResult OnPost()
        {
            _db.Products.Add(Products);
            _db.SaveChanges();
            return RedirectToPage("Index");
        }
    }


}
