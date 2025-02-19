const $task = document.querySelector('.task-list');

if (!$task) throw new Error('$task-list does not exist');

$task.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLElement;
  console.log('$eventTarget', $eventTarget);
  console.log('$eventTarget.tagName', $eventTarget.tagName);

  if ($eventTarget.tagName !== 'BUTTON') {
    return;
  }

  const $listItem = $eventTarget.closest('.task-list-item');
  console.log('closest', $listItem);
  $listItem?.remove();
});
