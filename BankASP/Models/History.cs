using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankASP.Models
{
    public class History
    {
        public int Id { get; set; }
        public string Date { get; set; }
        public int? UserId { get; set; }
        public User User { get; set; }
        public int? GroupId { get; set; }
        public Group Group { get; set; }
    }
}
