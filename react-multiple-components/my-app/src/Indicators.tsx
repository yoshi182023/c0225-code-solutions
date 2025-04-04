// src/Indicators.tsx
type Props = {
  count: number;
  current: number;
  onSelect: (index: number) => void;
};

export function Indicators({ count, current, onSelect }: Props) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => onSelect(i)}
        style={{ fontWeight: i === current ? 'bold' : 'normal' }}>
        {i}
      </button>
    );
  }
  return <>{buttons}</>;
}
