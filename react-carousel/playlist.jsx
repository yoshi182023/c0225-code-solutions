import "./styles.css";
import { useState } from "react";
export default function App() {
  const tracks = [
    { id: 0, name: "yesterday", artist: "Beatles" },
    { id: 1, name: "Nothing else", artist: "Meta" },
    { id: 2, name: "Always", artist: "Bon Jovi" },
    { id: 3, name: "waka", artist: "Shaki" },
  ];
  const [selectedTrack, setSelectedTrack] = useState({ ...tracks[0] });
  const [isPaused, setPaused] = useState(true);
  console.log("selectedTrack", selectedTrack);
  const renderTracks = () =>
    tracks.map((track) => (
      <div
        className={`tracks-list_item ${
          selectedTrack.id === track.id ? "tracks-list_item--selected" : ""
        }`}
        key={track.id}
      >
        <span className="track-list_name">{track.name}</span>
        <span className="track-list_artist">{track.artist}</span>
      </div>
    ));
  const onPrevButtonClick = () => {
    const prevId = (selectedTrack.id - 1 + tracks.length) % tracks.length;
    setSelectedTrack({ ...tracks[prevId] });
  };
  const onNextButtonClick = () => {
    const nextId = (selectedTrack.id + 1) % tracks.length;
    setSelectedTrack({ ...tracks[nextId] });
  };

  const onPlayPauseClick = () => {
    setPaused(!isPaused);
  };

  return (
    <main>
      <div>
        <h2 className="track-list_title">{renderTracks()}</h2>
      </div>
      <div className="player-controls">
        <button onClick={onPrevButtonClick}> ⏮ </button>
        <button onClick={onPlayPauseClick}>
          {isPaused ? "play" : "pause"}
        </button>
        <button onClick={onNextButtonClick}> ⏭ </button>
      </div>
      <div className="current-track">
        <strong>Now Playing:</strong> {selectedTrack.name} –{" "}
        {selectedTrack.artist}
      </div>
    </main>
  );
}
