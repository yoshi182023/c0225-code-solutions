let numberOfClicks: number = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('$hotButton does not exist');
$hotButton.addEventListener('click', () => {
  numberOfClicks++;
  let temperature;
  if (numberOfClicks < 4) {
    temperature = 'cold';
  } else if (numberOfClicks < 7) {
    temperature = 'cool';
  } else if (numberOfClicks < 13) {
    temperature = 'warm';
  } else if (numberOfClicks < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  if (!$hotButton || $clickCount) {
    throw new Error('hotButton or $click does not exist');
  }
  $hotButton.className = `hot-button ${temperature}`;
  $clickCount.textContent = `Clicks: ${numberOfClicks}`;
});
