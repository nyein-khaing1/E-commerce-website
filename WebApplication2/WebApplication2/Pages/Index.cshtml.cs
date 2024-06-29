using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Xml.Linq;
using WebApplication2.Models;

namespace WebApplication2.Pages
{


    public class IndexModel : PageModel
    {
        [BindProperty]
        public string Name { get; set; }
        [BindProperty]
        public string Email { get; set; }
        [BindProperty]
        public string Password { get; set; }

        public void OnGet()
        {

            ViewData["confirmation"] = $"Hello {Name}";
        }


        public void OnPost()
        {
            ViewData["confirmation"] = $"Hello {Name}";
            Console.WriteLine(Name);
        }
    }
}
