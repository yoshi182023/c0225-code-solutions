'use strict';
// Write code in interval.ts to update the page heading in a countdown from 4
// to '~Earth Beeeelooowww Us~'. Make sure that the page stops updating
// after the text shows
function startCountdown() {
  const heading = document.querySelector('countdown-display');
  if (!heading) return; // Exit if the element is not found
  let count = 4; // Start the countdown from 4
  // Set an interval to update the heading every second (1000ms)
  const intervalId = setInterval(function () {
    if (count > 0) {
      heading.textContent = count.toString(); // Update the text to the current count
      count--;
    } else {
      heading.textContent = '~Earth Beeeelooowww Us~';
      clearInterval(intervalId);
    }
  }, 100); // Update every 1000ms (1 second)
}
startCountdown();
