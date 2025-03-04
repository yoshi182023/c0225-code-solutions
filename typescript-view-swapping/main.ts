// The elements that will be referenced and given event listeners must be selected from the DOM and stored in variables.
const $tabCon = document.querySelector('.tab-container');

const tabs = document.querySelectorAll('.tab');
const views = document.querySelectorAll('.view');
console.log('Tab Container:', $tabCon);
console.log('Tabs:', tabs);
console.log('Views:', views);
if ($tabCon) {
  $tabCon.addEventListener('click', (event: Event) => {
    const $eventTarget = event.target as HTMLDivElement;
    console.log('event target', $eventTarget);
    if ($eventTarget.matches('.tab')) {
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i] === $eventTarget) {
          console.log('tab i ', tabs[i]);
          tabs[i].className = 'tab active';
        } else {
          tabs[i].classList.remove('active');
        }
      }
      const targetView = $eventTarget.dataset.view;
      console.log($eventTarget.dataset.view);
      console.log('targetView', targetView);
      // Update the current .view element's class name to either show or hide its content
      views.forEach((view) => {
        if (view.getAttribute('data-view') !== targetView) {
          view.className = 'view hidden';
          console.log('view.className', view.className);
        } else {
          view.className = 'view';
        }
      });
    }
  });
}
