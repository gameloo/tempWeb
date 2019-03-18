using BankASP.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankASP.Controllers
{
    [Route("api/history")]
    public class HistoryController : Controller
    {
        ApplicationContext db;

        public HistoryController(ApplicationContext context)
        {
            db = context;
            if (!db.Histories.Any())
            {
                db.Histories.Add(new History { Date = "Test Date_01_01_2001" });
            }
        }

        [HttpGet("{id_user}")]
        public IEnumerable<History> Get(int id_user)
        {
            return db.Histories.Where(i => i.UserId == id_user).ToList();
        }
    }
}
