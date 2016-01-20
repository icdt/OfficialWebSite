using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace icdtOfficialWebSite.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
           // ViewBag.Title = "Home Page";

            return Redirect("http://www.infocloud.com.tw/app");
        }
    }
}
