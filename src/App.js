import { Routes, Route, Link } from "react-router-dom";
import MusicPage from "./pages/MusicPage";
import MerchPage from "./pages/MerchPage";
import TourPage from "./pages/TourPage";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import { useRef, useState } from "react";
import CartPage from "./pages/CartPage";
import holdingMeBack from "./assets/music/holding-me-back.mp3";
import heavy from "./assets/music/heavy.mp3";

function App() {
  /* ===== HOME MUSIC PLAYER ===== */
  const audioRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [progress, setProgress] = useState({});

  const homeTracks = [
    {
      title: "There’s Nothing Holdin’ Me Back",
      artist: "NOIR WAVES",
      src: holdingMeBack,
    },
    {
      title: "Heavy",
      artist: "NOIR WAVES",
      src: heavy,
    },
  ];

  const togglePlay = (index) => {
    audioRefs.current.forEach((audio, i) => {
      if (i !== index && audio) audio.pause();
    });

    const audio = audioRefs.current[index];
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setPlayingIndex(index);
    } else {
      audio.pause();
      setPlayingIndex(null);
    }
  };

  const updateProgress = (index) => {
    const audio = audioRefs.current[index];
    setProgress((prev) => ({
      ...prev,
      [index]: (audio.currentTime / audio.duration) * 100 || 0,
    }));
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <h1>NOIR WAVES</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/music">Music</Link>
          </li>
          <li>
            <Link to="/tours">Tours</Link>
          </li>
          <li>
            <Link to="/merch">Merch</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* HERO */}
              <section className="hero">
                <h2>Music That Breathes Emotion</h2>
                <p>Independent Artist · Composer · Live Performer</p>
                <Link to="/music" className="btn-style">
                  Listen Now
                </Link>
              </section>

              {/* ABOUT */}
              <section className="about">
                <h3>About the Artist</h3>
                <p>
                  Noir Waves is a contemporary music artist known for blending
                  cinematic soundscapes with pulsing electronic rhythms and
                  deeply emotive melodies. Inspired by late-night city lights,
                  human vulnerability, and atmospheric storytelling, Noir Waves
                  creates music that feels immersive, introspective, and
                  timeless. Each composition is carefully crafted to evoke
                  emotion—whether it’s the quiet tension before a drop or the
                  haunting resonance of a melody that lingers long after the
                  track ends. From ambient electronic textures to bold,
                  rhythm-driven arrangements, the sound of Noir Waves exists at
                  the intersection of modern electronica and cinematic scoring.
                </p>
              </section>

              {/* MUSIC PREVIEW */}
              <section className="music">
                <h3>Popular Tracks</h3>

                <div className="tracks">
                  {homeTracks.map((track, index) => (
                    <div className="track" key={index}>
                      <h4>{track.title}</h4>
                      <p>{track.artist}</p>

                      <div className="player">
                        <button
                          className="play-btn"
                          onClick={() => togglePlay(index)}
                        >
                          {playingIndex === index ? "❚❚" : "▶"}
                        </button>

                        <div className="progress-bar">
                          <div
                            className="progress"
                            style={{ width: `${progress[index] || 0}%` }}
                          ></div>
                        </div>
                      </div>

                      <audio
                        ref={(el) => (audioRefs.current[index] = el)}
                        src={track.src}
                        onTimeUpdate={() => updateProgress(index)}
                        onEnded={() => setPlayingIndex(null)}
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* SHOWS */}
              <section className="shows">
                <h3>Upcoming Shows</h3>
                <p>Mumbai · Pune · Bangalore · 2026</p>
              </section>

              {/* CONTACT */}
              <section className="contact" id="contact">
                <h3>Let’s Create Together</h3>
                <Link to="/contact">
                  {" "}
                  <button className="contact-btn">Contact for Booking</button>
                </Link>
              </section>
            </>
          }
        />

        <Route path="/music" element={<MusicPage />} />
        <Route path="/tours" element={<TourPage />} />
        <Route path="/merch" element={<MerchPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-container">
          {/* Brand */}
          <div className="footer-brand">
            <h2>NOIR WAVES</h2>
            <p>
              Cinematic electronic music blending emotion, atmosphere, and
              storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/music">Music</Link>
              </li>
              <li>
                <Link to="/tours">Tours</Link>
              </li>
              <li>
                <Link to="/merch">Merch</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Noir Waves · All Rights Reserved
        </div>
      </footer>
    </>
  );
}

export default App;
