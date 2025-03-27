import { useState } from 'react';

import './App.css';

function App() {
  const [isOn, setIsOn] = useState(false);

  const label = 'label';
  // const labelclass = value ? 'isOn' : 'isOff';
  // The second step in creating a React component is to figure out the state and implement it.
  // For this component, the only state needed is whether the switch is on or off. Choose a good name for this state (isOn is a good name).
  // Add a call to useState for the on/off state.
  //   function handleClick() {
  //   setIsOn(!isOn);
  // }
  function handleClick() {
    setIsOn(!isOn);
  }
  const getColor = () => {
    return isOn ? 'yellow' : 'red';
  };
  return (
    <div
      className={`toggle-switch ${isOn ? 'is-on' : ''}`}
      onClick={handleClick}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span className="state-label" style={{ color: getColor() }}>
        {label} - - - {isOn ? 'ON' : 'OFF'}
      </span>
    </div>
  );
}

export default App;
