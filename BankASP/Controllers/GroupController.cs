using BankASP.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankASP.Controllers
{
    [Route("api/groups")]
    public class GroupController : Controller
    {
        ApplicationContext db;

        public GroupController(ApplicationContext context)
        {
            db = context;
            if (!db.Groups.Any())
            {
                db.Groups.Add(new Group { Name = "Test 1", MinValue = 0, MaxValue = 1 });
                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Group> Get()
        {
            return db.Groups.ToList();
        }

        [HttpGet("{id}")]
        public Group Get(int id)
        {
            return db.Groups.FirstOrDefault(i => i.Id == id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Group group)
        {
            if (ModelState.IsValid)
            {
                db.Groups.Add(group);
                db.SaveChanges();
                return Ok(ModelState);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Group group)
        {
            if (ModelState.IsValid)
            {
                db.Update(group);
                db.SaveChanges();
                return Ok(ModelState);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Group group = db.Groups.FirstOrDefault(x => x.Id == id);
            if (group != null)
            {
                db.Groups.Remove(group);
                db.SaveChanges();
            }
            return Ok(group);
        }
    }

}

