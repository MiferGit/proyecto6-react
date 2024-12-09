import ReservationsCard from "./ReservationsCard"


function ReservationsList({reservations, onDelete, onRate}) {
  return (
    <div className="gap-6">
        {reservations.map(reservation => (
            <ReservationsCard 
            key={reservation.id}
            reservation={reservation}
            onDelete={onDelete}
            onRate={onRate}
            />
        ))}

        {reservations.length === 0 && (
            <p>
                No reservation found
            </p>
        )}
    </div>
  )
}

export default ReservationsList