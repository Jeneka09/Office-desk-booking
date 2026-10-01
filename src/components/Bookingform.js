function BookingForm({
  desk,
  date,
  setDate,
  onConfirm,
  onCancel
}) {

  if (!desk) {
    return null;
  }

  return (
    <div className="booking-form">

      <h2>Book {desk.name}</h2>

      <p>
        Location: {desk.zone}
      </p>

      <label>
        Select Date
      </label>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <div className="form-buttons">

        <button
          onClick={onConfirm}
          className="confirm"
        >
          Confirm Booking
        </button>

        <button
          onClick={onCancel}
          className="cancel"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}

export default BookingForm;