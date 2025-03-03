// Write code in timeout.ts to update the page heading from '...' to 'Hello There'
// after two seconds have passed.
//  Here is an example. I

function updateHeading(): void {
  const heading = document.getElementById('message');
  if (heading) {
    heading.textContent = 'Hello There';
  }
}

setTimeout(updateHeading, 2000);
