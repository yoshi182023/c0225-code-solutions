import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';

import './App.css';

const srcs: string[] = ['/starry-sky.jpeg', '/mycar.jpg', '/xu.jpg'];
const captions = [
  'A Beautiful Image of Space',
  'learning state my car',
  'on March 25 xu xi yuan',
];
const descriptions = [
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit
  Aliquam incidunt sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus,
  commodi placeat eveniet,tur aperiam nemo, maiores laboriosam quam quod nisi ipsum,
  dicta sunt laborum similique repellat?`,
  'my image my car',
  'a famous woman',
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image srcs={srcs} />
      <Caption captions={captions} />
      <Description descriptions={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
