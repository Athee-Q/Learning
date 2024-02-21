using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HotelListPage
{
    internal class HotelList
    {
        static void Main(string[] args)
        {
            string hotel;

            NonVeg nonvegHotel = new NonVeg();
            hotel = nonvegHotel.HotelDetails();
            Console.WriteLine(hotel);

            Vegterian VegHotel = new Vegterian();
            hotel = VegHotel.HotelDetails();
            Console.WriteLine(hotel);

            Chinese ChineseHotel = new Chinese();
            hotel = ChineseHotel.HotelDetails();
            Console.WriteLine(hotel);

            Console.ReadKey();
        }
    }
}
