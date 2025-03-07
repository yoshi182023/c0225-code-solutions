// Within main.ts, use fetch to send a GET request to
// jsonplaceholder.typicode.com/users, and log the Array
// of user objects to the console.

// You can use the following data type for the user object:
// Declare the response data type
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users: User[] = await response.json();
    console.log('user', users);
    return users;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
fetchUsers();

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function fetchData(): Promise<Pokemon> {
  try {
    // Initiate a fetch request and await its response
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1', {
      method: 'GET',
    });
    console.log('response', response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('all data', data);
    const pokemon: Pokemon = {
      name: data.name,
      height: data.height,
      weight: data.weight,
    };
    console.log('poke', pokemon);
    return pokemon;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
fetchData();
