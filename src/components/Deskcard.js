function DeskCard({ desk, onBook }) {

  return (
    <div
      className={`desk-card ${
        desk.status === "booked"
          ? "booked"
          : "available"
      }`}
    >

      <div className="desk-icon">
        🪑
      </div>

      <h3>{desk.name}</h3>

      <p>{desk.zone}</p>

      <span className="status">
        {desk.status === "booked"
          ? "Booked"
          : "Available"}
      </span>

      {desk.status === "available" && (

        <button onClick={() => onBook(desk)}>
          Book Desk
        </button>

      )}

    </div>
  );
}

export default DeskCard;
