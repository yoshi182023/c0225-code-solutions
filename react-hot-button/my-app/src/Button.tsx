import './Button.css';
import { useState } from 'react';

// get your state as low as possible
// but if it is sharing, put state in parent
export function Button() {
  const [count, setCount] = useState(0);

  let color = 'purple';
  if (count <= 3) {
    color = 'purple';
  } else if (count <= 6) {
    color = 'mediumpurple';
  } else if (count <= 9) {
    color = 'red';
  } else if (count <= 12) {
    color = 'orange';
  } else if (count <= 15) {
    color = 'yellow';
  } else {
    color = 'white';
  }

  const style = {
    backgroundColor: color,
  };

  return (
    <div className="hot-button-container">
      {/* <Button      className="hot"  onClick={handleClick} style={style}></Button> */}
      <Button onClick={() => setCount(count + 1)} style={style}></Button>
      <p className="click-count">{count} Clicks</p>
    </div>
  );
}
