using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankASP.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string DateOfBirthday { get; set; }
        public int? GroupId { get; set; }
        public Group Group { get; set; }
        public virtual ICollection<History> Histories { get; set; }

        public User()
        {
            Histories = new List<History>();
        }
    }
}
