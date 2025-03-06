import { takeAChance } from './take-a-chance.js';
takeAChance('Mia')
  .then((message) => console.log(message))
  .catch((error) => console.error(` ${error.message}`));
