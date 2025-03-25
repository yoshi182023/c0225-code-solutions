import { useState } from 'react';

type Props = {
  descriptions: string[];
};
export function Description({ descriptions }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)<number>;
  const handleClick = () => {
    setCurrentIndex(
      (prevIndex: number) => (prevIndex + 1) % descriptions.length
    );
  };
  return (
    <p onClick={handleClick} style={{ cursor: 'pointer' }}>
      {descriptions[currentIndex]}
    </p>
  );
}
