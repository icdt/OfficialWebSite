using icdtOfficialWebSite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace icdtOfficialWebSite.Controllers
{
    public class MessageController : ApiController
    {
        // POST api/<controller>
        public void Post(Message newMessage)
        {
            ApplicationDbContext db = new ApplicationDbContext();
            db.Messages.Add(newMessage);
            db.SaveChanges();
        }
    }
}