import './App.css';
import { RotatingBanner } from './RotatingBanner';

function App() {
  const items = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ];

  return (
    <>
      <div>
        <h1>Rotating Banner</h1>
      </div>

      <RotatingBanner items={items} />
    </>
  );
}

export default App;
