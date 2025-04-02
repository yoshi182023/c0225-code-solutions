// src/RotatingBanner.tsx
import { useState, useEffect } from 'react';
import { Image } from './App';

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
  const dotsContainerStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '10px', // 可选，调整与其他元素的间距
  };

  return (
    <div className="carousel">
      <div className="dots-container" style={dotsContainerStyles}>
        {images.map((_, index) => (
          // <button
          //   key={images[index].alt}
          //   onClick={() => onCustomSelectProps(index)}
          //   // className={index === current ? 'active' : ''}
          //   style={index === current ? styles.activeIndicator : styles.indicator}>
          //   {index}
          // </button>

          <input
            key={images[index].alt}
            className={`dot ${index === current ? 'selected-dot' : ''}`}
            type="radio"
            name="dot"
            checked={index === current}
            onChange={() => onCustomSelectProps(index)}
          />
        ))}
      </div>{' '}
    </div>
  );
}
type BannerProps = {
  image: Image;
};
function Banner({ image }: BannerProps) {
  return <img className="current-image" src={image.src} alt={image.alt} />;
}

export function RotatingBanner({ images }: Props) {
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
      setCurrentIndex(newIndex);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [currentIndex, images.length]);

  function handlePrevious() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  function handleNext() {
    const newIndex = (currentIndex + 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  }

  function handleSelect(index: number): void {
    setCurrentIndex(index);
  }

  return (
    <div className="rotating-banner">
      {/* <Banner {items[currentIndexindex]} /> */}

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
