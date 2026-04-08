export default function TourPage() {
  return (
    <section className="tours">
      <h3 className="tours-title">Live Tour Dates</h3>
      <p className="tours-subtitle">
        Experience NOIR WAVES live across major cities
      </p>

      <div className="tour-list">
        <div className="tour-card">
          <div className="tour-date">
            <span>22</span>
            <small>MAR</small>
          </div>

          <div className="tour-info">
            <h4>Mumbai</h4>
            <p>Indie Fest · 8:00 PM</p>
          </div>

          <button
            className="tour-btn"
            onClick={() => (window.location.href = "/book")}
          >
            Book Tickets
          </button>
        </div>

        <div className="tour-card">
          <div className="tour-date">
            <span>05</span>
            <small>APR</small>
          </div>

          <div className="tour-info">
            <h4>Pune</h4>
            <p>Underground Arena · 9:00 PM</p>
          </div>

          <button
            className="tour-btn"
            onClick={() => (window.location.href = "/book")}
          >
            Book Tickets
          </button>
        </div>

        <div className="tour-card">
          <div className="tour-date">
            <span>18</span>
            <small>MAY</small>
          </div>

          <div className="tour-info">
            <h4>Bangalore</h4>
            <p>Electronica Live · 7:30 PM</p>
          </div>

          <button
            className="tour-btn"
            onClick={() => (window.location.href = "/book")}
          >
            Book Tickets
          </button>
        </div>
      </div>
    </section>
  );
}
