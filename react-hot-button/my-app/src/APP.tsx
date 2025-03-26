import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const getButtonColor = () => {
    if (count > 0 && count <= 3) return '#351c75';
    if (count >= 4 && count <= 6) return '#674ea7';
    if (count >= 7 && count <= 9) return 'red';
    if (count > 9 && count <= 12) return 'orange';
    if (count > 12 && count <= 15) return 'yellow';
    if (count > 16) return 'white';
    return 'green';
  };

  const increaseCount = () => {
    setCount(count + 1);
    if (count > 20) {
      setCount(0);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={increaseCount}
        style={{
          padding: '10px 20px',

          fontSize: '16px',
          backgroundColor: getButtonColor(),
          color: 'white',
          border: 'black',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>
        Hot Button
      </button>

      <p className="read-the-docs">{count} Clicks</p>
    </div>
  );
}

export default App;
