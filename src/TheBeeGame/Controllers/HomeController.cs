using System;
using Microsoft.AspNet.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using TheBeeGame.Bees;

namespace TheBeeGame.Controllers
{
    public class HomeController : Controller
    {
        private readonly Hive _hive;

        public HomeController(Hive hive)
        {
            if (hive == null) throw new ArgumentNullException(nameof(hive));

            _hive = hive;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult HitRandomBee()
        {
            _hive.HitRandomBee();
            _hive.Cleanup();
            return new HttpOkResult();
        }

        public IActionResult GetAllBees()
        {
            var json = JsonConvert.SerializeObject(_hive.GetAllBees(), new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            });

            return Content(json, "application/json");
        }
    }
}
