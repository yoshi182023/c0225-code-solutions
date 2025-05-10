import Image from './Image';
import './App.css';
import { Header } from './Header';
import { Caption } from './Caption';

import { Description } from './Description';
import { Button } from './Button';

export function App() {
  return (
    <>
      <div>
        <Header />
        <Image /> <Caption />
        <Description />
      </div>

      <Button />
    </>
  );
}

export default App;
