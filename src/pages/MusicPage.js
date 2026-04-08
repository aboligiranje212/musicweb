import { useRef, useState } from "react";
import holdingMeBack from "../assets/music/holding-me-back.mp3";
import heavy from "../assets/music/heavy.mp3";
import dietMountainDew from "../assets/music/diet-mountain-dew.mp3";

const tracksData = [
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
  {
    title: "Diet Mountain Dew",
    artist: "NOIR WAVES",
    src: dietMountainDew,
  },
];

export default function MusicPage() {
  const audioRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [progress, setProgress] = useState({});

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
    <section className="music">
      <h3>All Tracks</h3>

      <div className="tracks">
        {tracksData.map((track, index) => (
          <div className="track" key={index}>
            <h4>{track.title}</h4>
            <p>{track.artist}</p>

            <div className="player">
              <button className="play-btn" onClick={() => togglePlay(index)}>
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
  );
}
