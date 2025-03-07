'use strict';
// Within main.ts, use fetch to send a GET request to
// jsonplaceholder.typicode.com/users, and log the Array
// of user objects to the console.
// which waits for the promise returned by fetch to either resolve or reject.
// This allows the function to wait for the HTTP request to complete before moving on to the next line of code.
async function fetchUsers() {
  try {
    // Await Fetch Request: This section pauses the function's execution until the fetch request completes
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });
    console.log(response);
    // and a response is returned.
    // This is achieved using the await keyword before the fetch function call
    // Response Status Validation: After receiving the response, this step checks if the HTTP status
    // code indicates success (i.e., a status in the 200-299 range).
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // If response.ok is false, which means the status code is not in this range,
    // it throws an error with the status code included in the error message.
    // This ensures that the function only proceeds with a valid response.
    const users = await response.json();
    console.log('user', users);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchUsers();
async function fetchData() {
  try {
    // Initiate a fetch request and await its response
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1', {
      method: 'GET',
    });
    console.log('response', response);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const bulbas = await response.json();
    // const data = await response.json();
    // console.log('all data', data);
    // const pokemon: Pokemon = {
    //   name: data.name,
    //   height: data.height,
    //   weight: data.weight,
    // };
    console.log('poke', bulbas);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();
