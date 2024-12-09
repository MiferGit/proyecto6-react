import { Link } from "react-router";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { FaDollarSign } from "react-icons/fa6";
import { priceFormat } from "../../utils";

function ReservationsCard({ reservation, onDelete, onRate }) {
  const checkInDay = new Date(reservation.checkIn + "T00:00:00");
  const checkOutDay = new Date(reservation.checkOut + "T00:00:00");

  const milisecondsPerDay = 1000 * 60 * 60 * 24;

  const nights = Math.ceil((checkOutDay - checkInDay) / milisecondsPerDay);

  const pricePerNight = parseInt(reservation?.hotel?.price);

  const totalPrice = pricePerNight * nights;
  //*************************************************************** */

  return (
    <div className=" max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden overflow-hidden hover:scale-95 transition-transform duration-300">
      <h2 className="text-xl font-semibold p-4 bg-blue-500">
        <Link to={`/hotel/${reservation?.hotel?.id}`}>
        {reservation?.hotel.name}
        </Link>
      </h2>

      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <IoCalendarClearOutline className="size-8" />
            <div>
              <p className="font-semibold">Arrivale</p>
              <p className="text-xs">{reservation.checkIn}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IoCalendarClearOutline className="size-8" />
            <div>
              <p className="font-semibold">Departure</p>
              <p className="text-xs">{reservation.checkOut}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <IoLocationOutline />
          <p className="text-sm">
            {reservation?.hotel?.city?.name},{" "}
            {reservation?.hotel?.city?.country}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <LiaBedSolid />
          <p>
            {nights} {nights === 1 ? "night" : "nights"}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaDollarSign />
            <p>Price per night</p>
          </div>
          <p className="font-semibold">{priceFormat.format(pricePerNight)}</p>
        </div>

        <div className="flex justify-between items-center border-t pt-4">
          <div className="flex items-center gap-2">
            <FaDollarSign />
            <p className="font-semibold text-lg">Total</p>
          </div>
          <p className="font-semibold text-xl">
            {priceFormat.format(totalPrice)}
          </p>
        </div>
      </div>

      <div className="flex justify-between bg-gray-100 py-4 px-6">
        <button 
        className="btn bg-red-500"
        onClick={()=> onDelete(reservation?.id)}
        >
          Delete
          </button>
        <button className="btn bg-yellow-500"
        onClick={()=> onRate(reservation?.hotel?.id)}
        >
          Rate
          </button>
      </div>
    </div>
  );
}

export default ReservationsCard;
