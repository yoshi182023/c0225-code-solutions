/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { UserDetails } from './UserDetails';
import { UserCard } from './UserCard';
import './Users.css';

export type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
};
// call to useEffect to send a GET request to
// https://jsonplaceholder.typicode.com/users and read a list of ten users.
//The effect should run once after User mounts. Make sure your useEffect dependencies are correct.
export function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function read() {
      try {
        const response = await fetch(
          ' https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) throw new Error(`Error reading: ${response.status}`);
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    read();
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }
  return (
    <div className="container">
      <UserList users={users} onClick={(user) => setUser(user)} />
      {user && (
        <UserDetails userId={user.id} onCancel={() => setUser(undefined)} />
      )}
    </div>
  );
}

type ListProps = {
  users: User[];
  onClick: (user: User) => void;
};
function UserList({ users, onClick }: ListProps) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
