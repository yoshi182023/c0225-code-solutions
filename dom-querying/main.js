'use strict';
// Use document.querySelector() to query the DOM for an h1 element and assign it to a variable.
const $element = document.querySelector('h1');
console.dir($element);
console.log('$heading', $element);
const $explanation = document.querySelector('#explanation');
console.log('$explanation', $explanation);
// Use document.querySelector() to query the DOM for the element with an id attribute of "explanation" and assign it to a variable.const $element = document.querySelector('.h1');
const $element2 = document.getElementById('explanation');
console.dir($element2);
console.log('byID explanation', $element2);
// Use document.querySelector() to query the DOM for the element with a class attribute of "hint" and assign it to a variable.
const $element3 = document.querySelector('.hint');
// log the variable to the console.
console.log($element3);
// Use console.dir() to inspect the element object's properties in the console.
// Use document.querySelectorAll() to query the DOM for all elements of type p and assign the resulting NodeList to a variable.
// log the variable to the console.
const $p = document.querySelectorAll('p');
console.dir($p);
console.log('log the variable type p', $p);
// Use document.querySelectorAll() to query the DOM for all elements with a class attribute of "example-link"
// and assign the resulting NodeList to a variable.
const $links = document.querySelectorAll('.example-link');
console.log($links);
