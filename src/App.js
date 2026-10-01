import './App.css';
import Navbar from './components/Navbar';
import BookingForm from './components/Bookingform';
import { useState } from 'react';
import DeskCard from './components/Deskcard';
import BookingList from './components/Bookinglist';

import desksData from './data/Desk';

function App() {
  const [desks, setDesks] =
    useState(desksData);

  const [selectedDesk, setSelectedDesk] =
    useState(null);

  const [date, setDate] =
    useState("");

  const [bookings, setBookings] =
    useState([]);

  const handleBook = (desk) => {
    setSelectedDesk(desk);
  };

  const confirmBooking = () => {

    if (!date) {
      alert("Please select a date");
      return;
    }

    const newBooking = {
      id: Date.now(),
      deskId: selectedDesk.id,
      deskName: selectedDesk.name,
      zone: selectedDesk.zone,
      date: date
    };

    setBookings([
      ...bookings,
      newBooking
    ]);

    setDesks(
      desks.map((desk) =>
        desk.id === selectedDesk.id
          ? {
              ...desk,
              status: "booked"
            }
          : desk
      )
    );

    setSelectedDesk(null);
    setDate("");

    alert("Desk booked successfully!");
  };

  const cancelBooking = (bookingId) => {

    const booking = bookings.find(
      (item) => item.id === bookingId
    );

    setBookings(
      bookings.filter(
        (item) => item.id !== bookingId
        )
    );

    setDesks(
      desks.map((desk) =>
        desk.id === booking.deskId
          ? {
              ...desk,
              status: "available"
            }
          : desk
      )
    );
    };

  return (
    <div>

      <Navbar />

      <main className="container">

        <div className="dashboard-header">

          <div>
            <h1>Office Desk Booking</h1>

            <p>
              Select a desk and reserve your workspace.
            </p>
          </div>

          <div className="date-box">

            <label>
              Booking Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
            />

          </div>

        </div>

        <div className="summary">

          <div>
            <strong>
              {desks.length}
            </strong>

            <span>Total Desks</span>
          </div>

          <div>
            <strong>
              {
                desks.filter(
                  (desk) =>
                    desk.status === "available"
                ).length
              }
            </strong>

            <span>Available</span>
          </div>

          <div>
            <strong>
              {
                desks.filter(
                  (desk) =>
                    desk.status === "booked"
                ).length
              }
            </strong>

            <span>Booked</span>
          </div>

        </div>

        <section>

          <h2>Available Desks</h2>

          <div className="desk-grid">

            {desks.map((desk) => (

              <DeskCard
                key={desk.id}
                desk={desk}
                onBook={handleBook}
              />

            ))}

          </div>

        </section>

        <BookingList
          bookings={bookings}
          onCancel={cancelBooking}
        />

      </main>

      {selectedDesk && (

        <div className="modal">

          <BookingForm
            desk={selectedDesk}
            date={date}
            setDate={setDate}
            onConfirm={confirmBooking}
            onCancel={() =>
              setSelectedDesk(null)
            }
          />

        </div>

      )}

    </div>
  );
}

export default App;
