using Microsoft.AspNet.Mvc;
using TheBeeGame.Bees;

namespace TheBeeGame.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var bee = new Queen();

            return View();
        }
    }
}
