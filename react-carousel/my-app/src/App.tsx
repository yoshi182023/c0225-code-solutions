import './App.css';
import { RotatingBanner } from './RotatingBanner';

export type Image = {
  src: string;
  alt: string;
};
function App() {
  const images: Image[] = [
    {
      src: '/images/fushiguro.webp',
      alt: 'Megumi Fushiguro',
    },
    {
      src: '/images/inumaki.webp',
      alt: 'Toge Inumaki',
    },
    {
      src: '/images/itadori.webp',
      alt: 'Yuji Itadori',
    },
    {
      src: '/images/kugisaki.webp',
      alt: 'Nobara Kugisaki',
    },
    {
      src: '/images/panda.webp',
      alt: 'Panda',
    },
    {
      src: '/images/zen-in.webp',
      alt: "Maki Zen'in",
    },
  ];

  return (
    <>
      <RotatingBanner images={images} />
    </>
  );
}

export default App;
