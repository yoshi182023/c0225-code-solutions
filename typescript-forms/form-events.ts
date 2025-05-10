const handleFocus = (event: Event): void => {
  // logs a message that the 'focus' event was fired
  console.log('focus event was fired');
  // assigns event.target to a variable eventTarget
  const $eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  // utilizes type assertion to give eventTarget a type of HTMLInputElement
  // OR HTMLTextAreaElement
  // logs the eventTarget.name
  console.log('eventTarget:', $eventTarget);
  console.log('eventTarget name:', $eventTarget.name);
};
const handleBlur = (event: Event): void => {
  // logs a message that the 'focus' event was fired
  console.log('Blur event was fired');
  // assigns event.target to a variable eventTarget
  const $eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  // OR HTMLTextAreaElement
  // logs the eventTarget.name
  console.log('eventTarget name:', $eventTarget.name);
};
const handleInput = (event: Event): void => {
  // logs a message that the 'focus' event was fired
  // assigns event.target to a variable eventTarget
  const $eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  // OR HTMLTextAreaElement
  // logs the eventTarget.name
  console.log('eventTarget name:', $eventTarget.name);
  console.log('eventTarget value:', $eventTarget.value);
};
const $input = document.querySelector('input');
if (!$input) throw new Error('$input does not exist');
$input.addEventListener('focus', (event) => {
  handleFocus(event);
});

$input.addEventListener('input', (event) => {
  handleInput(event);
});

$input.addEventListener('blur', (event) => {
  handleBlur(event);
});
