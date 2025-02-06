'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
const isUnderFive = (number) => number < 5;
console.log('Test(4):', isUnderFive(4));
// true
console.log('Test(10):', isUnderFive(10));
// false
console.log('Test(5):', isUnderFive(5));
// false
const isEven = (num) => num % 2 === 0;
console.log('Test isEven 4', isEven(4));
// true
console.log('Test isEven 10', isEven(10));
// true
console.log('Test isEven 5', isEven(5));
// false
const startsWithJ = (string) => string[0] === 'J';
console.log('startsWithJ JavaScript', startsWithJ('JavaScript'));
// true
console.log('startsWithJ PHP', startsWithJ('PHP'));
// false
console.log('startsWithJ HTML', startsWithJ('HTML'));
// false
console.log('startsWithJ Java', startsWithJ('Java'));
// true
const isOldEnoughToDrive = (person) => person.age > 16;
const homer = {
  name: 'Homer Jay Simpson',
  age: 39,
};
console.log(isOldEnoughToDrive(homer));
const isOldEnoughToDrinkAndDrive = (person) => false;
console.log('isOldEnoughToDrinkAndDrive:', isOldEnoughToDrinkAndDrive(homer));
const categorizeAcidity = (pH) => {
  switch (
    true // 为什么
  ) {
    case pH === 7:
      return 'netural';
    case pH > 0 && pH < 7:
      return 'acid';
    case pH > 7 && pH <= 14:
      return 'base';
    default:
      return 'Invalid pH level';
  }
};
console.log(categorizeAcidity(-1));
const introduceWarnerBro = (name) => {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
};
console.log(introduceWarnerBro('yakko'));
// "We're the warner brothers!"
console.log(introduceWarnerBro('wakko'));
// "We're the warner brothers!"
console.log(introduceWarnerBro('dot'));
// "I'm cute~"
console.log(introduceWarnerBro('cody'));
// "Goodnight everybody!"
console.log(introduceWarnerBro('minerva'));
// "Goodnight everybody!"
const recommendMovie = (genre) => {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'The Exorcist';
    case 'drama':
      return 'The Shawshank Redemption';
    case 'musical':
      return 'The Sound of Music';
    case 'sci-fi':
      return 'Blade Runner';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
};
console.log(recommendMovie('action')); // "Die Hard"
console.log(recommendMovie('comedy')); // "The Big Lebowski"
console.log(recommendMovie('horror')); // "The Exorcist"
console.log(recommendMovie('drama')); // "The Shawshank Redemption"
console.log(recommendMovie('musical')); // "The Sound of Music"
console.log(recommendMovie('sci-fi')); // "Blade Runner"
console.log(recommendMovie('random')); // "Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi"
