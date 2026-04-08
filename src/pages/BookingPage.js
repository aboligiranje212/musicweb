import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // (Later you can add API / validation here)

    navigate("/tours"); // ✅ redirect after booking
  };

  return (
    <section className="booking">
      <h3 className="booking-title">Book Your Tickets</h3>
      <p className="booking-subtitle">
        Reserve your spot for an unforgettable live experience
      </p>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Select City</label>
          <select required>
            <option value="">Choose a city</option>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Bangalore</option>
          </select>
        </div>

        <div className="form-group">
          <label>Number of Tickets</label>
          <input type="number" min="1" max="6" defaultValue="1" />
        </div>

        <button type="submit" className="booking-btn">
          Confirm Booking
        </button>
      </form>
    </section>
  );
}
