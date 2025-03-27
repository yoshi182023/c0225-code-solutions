type Props = {
  label: string;
  onNext: () => void;
};
// Create a nested function inside the Button function, named handleClick.
// Add an onClick prop to the <button> element and set it to handleClick.
// Implement handleClick to display an alert that the button was clicked.
export function Button({ label, onNext }: Props) {
  function handleClick() {
    onNext();
  }
  return <button onClick={handleClick}>{label}</button>;
}
