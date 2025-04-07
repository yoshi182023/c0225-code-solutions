import { FaPause, FaPlay } from 'react-icons/fa';
import './StopWatch.css';
import { useState } from 'react';

export function StopWatch() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  // 一开始intervalid是undefined
  const isPlaying = intervalId;

  function handlePlay() {
    const intervalId = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    setIntervalId(intervalId);
  }

  function handlePause() {
    clearInterval(intervalId);
    setIntervalId(undefined);
  }

  function handleReset() {
    if (!intervalId) {
      setElapsedSeconds(0);
    }
  }
  return (
    <div className="stopwatch">
      <div
        className="watch-face"
        onClick={handleReset}
        style={
          isPlaying ? { backgroundColor: 'yellow' } : { backgroundColor: 'red' }
        }>
        <span>{elapsedSeconds}</span>
      </div>

      {isPlaying ? (
        <FaPause
          onClick={handlePause}
          size="2rem"
          className="start-stop"
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <FaPlay
          onClick={handlePlay}
          size="2rem"
          style={{ cursor: 'pointer' }}
        />
      )}
    </div>
  );
}
