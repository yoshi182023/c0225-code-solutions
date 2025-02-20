'use strict';
const $open = document.querySelector('.open-modal');
const $dismiss = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('& dialog');
if (!$open || !$dismiss || !$dialog) throw new Error('$does not exist');
$open.addEventListener('click', (event) => {
  $dialog.showModal();
});
$dismiss.addEventListener('click', (event) => {
  $dialog.close();
});
