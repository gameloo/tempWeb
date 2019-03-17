using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankASP.Models
{
    public class Group
    {
        public bool IsHide { get; set; }
        public int Id { get; set; }
        public string Name { get; set; }
        public double MinValue { get; set; }
        public double MaxValue { get; set; }
        public virtual ICollection<History> Histories { get; set; }
        public virtual ICollection<User> Users { get; set; }

        public Group()
        {
            Histories = new List<History>();
            Users = new List<User>();
        }
    }
}
