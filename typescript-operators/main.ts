/* eslint-disable no-unused-vars */

interface Customer {
  name: string;
  details?: {
    address?: {
      city: string;
      street: string;
      zip: string;
    };
    age?: number;
  };
}

const v1 = { value: 'Something' };

const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];
const v5: Customer = {
  name: 'Carl',
  details: {
    age: 82,
  },
};
// write two expressions that utilize the Logical AND (&&) Operator to do the following:
// Logs "v1 is truthy" to the console if v1 is truthy.
v1 && console.log('v1 is truthy');
// Logs "v2 is truthy" to the console if v2 is truthy.
v2 && console.log('v2 is truthy');
// Write two expressions that utilize the Logical OR (||) Operator to do the following:
// Assigns 'default-value' to a variable config1 only if v1 is falsy
const config1 = v1 || 'default-value';
// Assigns 'default-value' to a variable config2 only if v2 is falsy
const config2 = v2 || 'default-value';
// Log both the config1 & config2 variables to the console.
console.log('config1', config1);
console.log('config2', config2);
// Write three expressions that utilize the Nullish coalescing operator (??) to do the following:
// Assigns 'default-value' to a variable cfg1 only if v1 is undefined
const cfg1 = v1 ?? 'default-value';
// Assigns 'default-value' to a variable cfg2 only if v2 is undefined
const cfg2 = v2 ?? 'default-value';
// Assigns 'default-value' to a variable cfg3 only if v3 is undefined
const cfg3 = v3 ?? 'default-value';
// Log the cfg1, cfg2, & cfg3 variables to the console.
console.log(`cfg1: ${cfg1} cfg2 : ${cfg2}  cfg3 :  ${cfg3}`);
// Write two expressions that utilize the Conditional (ternary) operator (?:) to do the following:
// Assigns 'truthy' to a variable tern1 only if v1 is truthy, otherwise, assigns 'falsy'

const tern1 = v1 ? 'truthy' : 'falsy';
// Assigns 'truthy' to a variable tern2 only if v2 is truthy, otherwise, assigns 'falsy'
const tern2 = v2 ? 'truthy' : 'falsy';
// Log both the tern1 & tern2 variables to the console.
console.log(`tern1: ${tern1}, tern2 ${tern2}`);
// Write two expressions that utilizes the Optional chaining operator (?.) to do the following:
// Assigns the value property of the v1 object to the variable oc1
const oc1 = v1?.value;
// Assigns the city property of the address property of the details property of the v5 object,
// to the variable oc2.
const oc2 = v5?.details?.address?.city;
// Log the oc1 & oc2 variables to the console
console.log(`oc1 : ${oc1} oc2: ${oc2}`);
// Write one expression that utilizes the Spread syntax (...) to do the following:
// Copies the v1 object and adds a property foo with the value of 'bar', and assigns it to the variable sObj.

const sObj = { ...v1, foo: 'bar' };
// Log the sObj variable to the console
console.log('sObj', sObj);
// Write one expression that utilizes the Spread syntax (...) to do the following:
// Copies the v4 array and adds the element 100 to the front of the array, and assigns it to the variable sArr.

const sArr = [100, ...v4];
// Log the sArr variable to the console
console.log('sArr', sArr);
