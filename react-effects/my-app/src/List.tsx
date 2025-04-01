/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { readItems, type Item } from './read';

export function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<unknown>();

  // Your code here:
  //  - When the component mounts:
  //    - Read the items using `readItems` and update state so the list displays
  //    - Handle errors from `readItems`

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setIsLoading(true);
        const data = await readItems(); // Assuming readItems is an async function
        setItems(data);
      } catch (err) {
        setError(err);
        console.error('Failed to load items:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    setError(error);
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.id}: {item.name}
        </li>
      ))}
    </ul>
  );
}
