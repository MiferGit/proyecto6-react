import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "../../utils";
import useApiFetch from "../../hooks/useApiFetch";

const schema = z.object({
  checkIn: z.string().min(1, { message: "Check-In is required" }),
  checkOut: z.string().min(1, { message: "Check-Out is required" }),
});

function Reservation({ hotelId }) {
  const [data, createReservation] = useApiFetch()



  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (dataForm) => {
    dataForm.hotelId = hotelId;
    createReservation({
      url: '/bookings',
      method: 'POST',
      body: dataForm
    })
    reset();
  };

  //*************************************************** */
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row md:items-center justify-center gap-2 mb-4">
        
        <div className="flex items-center gap-2 mb-4 justify-center">
          <div className="flex flex-col items-center">
            <label className="font-semibold text-sm">Check-In</label>
            <input
              type="date"
              className="border px-3 py-1 rounded-sm"
              {...register("checkIn")}
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="font-semibold text-sm">Check-Out</label>
            <input
              type="date"
              className="border px-3 py-1 rounded-sm"
              {...register("checkOut")}
            />
          </div>
        </div>

        <button className="btn bg-emerald-500">Reserve</button>
      </div>

      {/**Error */}

      <p
        className={cn(
          "error-Validation hidden text-center",
          (errors.checkIn || errors.checkOut) && "block"
        )}
      >
        {errors.checkIn && errors.checkIn.message}{" "}
        {errors.checkOut && errors.checkOut.message}
      </p>
    </form>
  );
}

export default Reservation;
