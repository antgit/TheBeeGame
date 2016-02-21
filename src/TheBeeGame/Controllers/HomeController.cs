using System;
using System.Linq;
using Microsoft.AspNet.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using TheBeeGame.Bees;
using TheBeeGame.Infrastructure.Exceptions;
using TheBeeGame.Models;

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

        [HttpPost]
        public IActionResult HitRandomBee()
        {
            _hive.HitRandomBee();
            _hive.Cleanup();
            return new HttpOkResult();
        }

        [HttpGet]
        public IActionResult GetAllBees()
        {
            var bees = _hive.GetAllBees();

            var model = bees.Select(b => new BeeModel
            {
                Health = b.Health,
                Type = ConvertBeeType(b),
                UniqueId = b.UniqueId
            }).ToList();

            var json = JsonConvert.SerializeObject(model, new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            });

            return Content(json, "application/json");
        }

        private BeeType ConvertBeeType(Bee bee)
        {
            if (bee is Queen)
            {
                return BeeType.Queen;
            }

            if (bee is Worker)
            {
                return BeeType.Worker;
            }

            if (bee is Drone)
            {
                return BeeType.Drone;
            }

            throw new UnknownBeeException();
        }
    }
}
