﻿using BankASP.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankASP.Controllers
{
    [Route("api/users")]
    public class UserController : Controller
    {
        ApplicationContext db;

        public UserController(ApplicationContext context)
        {
            db = context;
            if (!db.Users.Any())
            {
                db.Users.Add(new User { FirstName = "Test_First_Name", LastName = "Test_Last_Name", DateOfBirthday = "Test_01_01_2001" });
                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            return db.Users.ToList();
        }

        [HttpGet("{id}")]
        public User Get(int id)
        {
            return db.Users.FirstOrDefault(i => i.Id == id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]User user)
        {
            if (ModelState.IsValid)
            {
                db.Users.Add(user);
                db.SaveChanges();
                return Ok(ModelState);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]User user)
        {
            if (ModelState.IsValid)
            {
                db.Update(user);
                db.SaveChanges();
                return Ok(ModelState);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            User user = db.Users.FirstOrDefault(x => x.Id == id);
            if (user != null)
            {
                db.Users.Remove(user);
                db.SaveChanges();
            }
            return Ok(user);
        }
    }
}
