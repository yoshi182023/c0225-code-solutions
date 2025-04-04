// src/RotatingBanner.tsx
import { useState } from 'react';
const styles = {
  activeIndicator: {
    backgroundColor: 'blue',
    color: 'white',
    fontWeight: 'bold',
  },
  indicator: {
    margin: '0 5px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

type Props = {
  items: string[];
};
type PrevButtonProps = {
  onCustomClickProps: () => void;
};

type NextButtonProps = {
  onCustomClickProps: () => void;
};

type IndicatorsProps = {
  items: string[];
  current: number;
  onCustomSelectProps: (index: number) => void;
};
function PrevButton({ onCustomClickProps }: PrevButtonProps) {
  return <button onClick={onCustomClickProps}>Prev</button>;
}

function NextButton({ onCustomClickProps }: NextButtonProps) {
  return <button onClick={onCustomClickProps}>Next</button>;
}

function Indicators({ items, current, onCustomSelectProps }: IndicatorsProps) {
  return (
    <>
      {items.map((_, index) => (
        <button
          key={index}
          onClick={() => onCustomSelectProps(index)}
          // className={index === current ? 'active' : ''}
          style={index === current ? styles.activeIndicator : styles.indicator}>
          {index}
        </button>
      ))}
    </>
  );
}
type BannerProps = {
  item: string;
};
function Banner({ item }: BannerProps) {
  return <h2>{item}</h2>;
}

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevious() {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }

  function handleNext() {
    const newIndex = (currentIndex + 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
  }

  function handleSelect(index: number): void {
    setCurrentIndex(index);
  }

  return (
    <div className="rotating-banner">
      {/* <Banner {items[currentIndexindex]} /> */}

      <div>
        <Banner item={items[currentIndex]} />
        <PrevButton onCustomClickProps={handlePrevious} />
        <Indicators
          onCustomSelectProps={handleSelect}
          current={currentIndex}
          items={items}
        />
        <NextButton onCustomClickProps={handleNext} />
      </div>
    </div>
  );
}
