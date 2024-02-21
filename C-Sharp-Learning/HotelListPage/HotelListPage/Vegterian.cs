using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotelListPage
{
    internal class Vegterian:Hotel
    {
        protected static int id;
        protected static string[] name = { "Aishvarya", "Malligai" };
        protected static string[] phone = { "7233455550", "8443224890" };

        public string HotelDetails()
        {
            return HotelDetails(name, phone);
        }
    }
}
