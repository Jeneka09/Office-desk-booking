function BookingList({ bookings, onCancel }) {

  return (
    <section className="booking-section">

      <h2>My Bookings</h2>

      {bookings.length === 0 ? (

        <p>No bookings yet.</p>

      ) : (

        bookings.map((booking) => (

          <div
            className="booking-item"
            key={booking.id}
          >

            <div>
              <h3>{booking.deskName}</h3>

              <p>
                📅 {booking.date}
              </p>

              <p>
                📍 {booking.zone}
              </p>
            </div>

            <button
              onClick={() => onCancel(booking.id)}
            >
              Cancel
            </button>

          </div>

        ))

      )}

    </section>
  );
}

export default BookingList;