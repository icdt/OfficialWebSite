using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace icdtOfficialWebSite.Models
{
    public class Message
    {
        [Key]
        public int Id { get; set; }

        public String Email { get; set; }

        public String Company { get; set; }

        public String Name { get; set; }

        public String Content { get; set; }
        
        
    }
}