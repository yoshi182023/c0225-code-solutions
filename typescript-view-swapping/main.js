'use strict';
// The elements that will be referenced and given event listeners must be selected from the DOM and stored in variables.
const $tabCon = document.querySelector('.tab-container');
const tabs = document.querySelectorAll('.tab');
const views = document.querySelectorAll('.view');
console.log('Tab Container:', $tabCon);
console.log('Tabs:', tabs);
console.log('Views:', views);
if ($tabCon) {
  // An event listener must be attached to the TabContainer element.
  $tabCon.addEventListener('click', (event) => {
    // Store the event.target to a variable
    const $eventTarget = event.target;
    console.log('event target', $eventTarget);
    // Verify that a .tab element was clicked before proceeding with
    // any further functionality
    if ($eventTarget.matches('.tab')) {
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i] === $eventTarget) {
          console.log('tab i ', tabs[i]);
          tabs[i].classList.add('active');
        } else {
          tabs[i].classList.remove('active');
        }
      }
    }
    const targetView = $eventTarget.getAttribute('data-view');
    console.log('targetview', targetView);
    // Update the current .view element's class name to either show or hide its content
    views.forEach((view) => {
      if (view.getAttribute('data-view') === targetView) {
        view.classList.remove('hidden');
      } else {
        view.classList.add('hidden');
      }
    });
  });
}
