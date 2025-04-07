// src/RotatingBanner.tsx
import { useState, useEffect } from 'react';
import { Image } from './App';
// import { FaCircle, FaRegCircle } from 'react-icons/fa';

type Props = {
  images: Image[];
};
type PrevButtonProps = {
  onCustomClickProps: () => void;
};

type NextButtonProps = {
  onCustomClickProps: () => void;
};

type IndicatorsProps = {
  images: Image[];
  current: number;
  onCustomSelectProps: (index: number) => void;
};

function PrevButton({ onCustomClickProps }: PrevButtonProps) {
  return (
    <button
      onClick={onCustomClickProps}
      style={{
        borderRadius: '50px',
        backgroundColor: 'rgba(233, 217, 217, 0.273)',
        border: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      &lt;
    </button>
  );
}

function NextButton({ onCustomClickProps }: NextButtonProps) {
  return (
    <button
      onClick={onCustomClickProps}
      style={{
        borderRadius: '50px',
        backgroundColor: 'rgba(233, 217, 217, 0.273)',
        border: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      &gt;
    </button>
  );
}

function Indicators({ images, current, onCustomSelectProps }: IndicatorsProps) {
  return (
    <div className="carousel">
      <div
        className="progress-dots"
        style={{
          height: '2rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '18px',
          marginTop: '10px',
        }}>
        {images.map(
          (_, index) => (
            <input
              key={images[index].alt}
              className={`dot ${index === current ? 'selected-dot' : ''}`}
              type="radio"
              name="dot"
              checked={index === current}
              onChange={() => onCustomSelectProps(index)}
            />
          )
          // current === index ? (
          //   <FaCircle
          //     key={index}
          //     className="progess-dot"
          //     onChange={() => onCustomSelectProps(index)}
          //   />
          // ) : (
          //   <FaRegCircle
          //     key={index}
          //     className="progess-dot"
          //     onChange={() => onCustomSelectProps(index)}
          //   />
          // )
        )}
      </div>{' '}
    </div>
  );
}
type BannerProps = {
  image: Image;
};
function Banner({ image }: BannerProps) {
  return (
    <div className='="image-wrapper' style={{ position: 'relative' }}>
      <img className="current-image" src={image.src} alt={image.alt} />
    </div>
  );
}
export function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerContainerStyles = {
    display: 'flex',
    alignItems: 'center', // 让按钮和图片垂直居中对齐
    justifyContent: 'center',
    gap: '10px',
    position: 'relative',
    width: '100%',
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
      const newIndex = (currentIndex + 1 + images.length) % images.length;
      console.log('[Interval] Tick at', new Date().toLocaleTimeString());
      setCurrentIndex(newIndex);
    }, 6000);
    return () => {
      console.log('[Interval] Cleanup', new Date().toLocaleTimeString());
      clearTimeout(timerId);
    };
  }, [currentIndex, images]);

  function handlePrevious() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }
  // function handleNext() {??
  //   clearInterval(interalId);
  //   setCurrentIndex((prev) => (prev + 1) % images.length);
  // }

  function handleNext() {
    const newIndex = (currentIndex + 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  }
  function handleSelect(index: number): void {
    setCurrentIndex(index);
  }
  return (
    <div
      className="carousel"
      style={{
        position: 'relative',
        width: '800px',
        margin: '0 auto',
        padding: '1rem',
        border: '0.25rem solid',
      }}>
      <div style={bannerContainerStyles}>
        <PrevButton onCustomClickProps={handlePrevious} />

        <Banner image={images[currentIndex]} />
        <NextButton onCustomClickProps={handleNext} />
      </div>
      <Indicators
        images={images}
        current={currentIndex}
        onCustomSelectProps={handleSelect}
      />
    </div>
  );
}
