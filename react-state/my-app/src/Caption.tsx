import { useState } from 'react';
type Props = {
  captions: string[];
};
export function Caption({ captions }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)<number>;
  const handleClick = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % captions.length);
  };
  return <h3 onClick={handleClick}>{captions[currentIndex]}</h3>;
}
