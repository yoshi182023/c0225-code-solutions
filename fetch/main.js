'use strict';
// Within main.ts, use fetch to send a GET request to
// jsonplaceholder.typicode.com/users, and log the Array
// of user objects to the console.
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
fetchUsers();
async function fetchData() {
  try {
    // Initiate a fetch request and await its response
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1', {
      method: 'GET',
    });
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const pokemon = {
      name: data.name,
      height: data.height,
      weight: data.weight,
    };
    console.log(pokemon);
    return pokemon;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
fetchData();
