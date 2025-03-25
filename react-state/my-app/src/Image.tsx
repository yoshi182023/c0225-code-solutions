import './Image.css';
import { useState } from 'react';
type Props = {
  srcs: string[];
};
export function Image({ srcs }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)<number>;
  const handleImageClick = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % srcs.length);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          src={srcs[currentIndex]}
          alt="space-image"
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
}
