'use strict';
const $task = document.querySelector('.task-list');
if (!$task) throw new Error('$task-list does not exist');
$task.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  console.log('$eventTarget', $eventTarget);
  console.log('$eventTarget.tagName', $eventTarget.tagName);
  if ($eventTarget.tagName !== 'BUTTON') {
    return;
  }
  const $listItem = $eventTarget.closest('.task-list-item');
  console.log('closest', $listItem);
  $listItem?.remove();
});
