import { useEffect, useState } from 'react';
import { type Item, readItems } from '../lib/read';
import { useNavigate } from 'react-router-dom';

// type Props = {
//   onDetails: (itemId: number) => void;
// };
// export function Dashboard({ onDetails }: Props) {
export function Dashboard() {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadItems() {
      try {
        const values = await readItems();
        setItems(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadItems();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <hr className="py-1" />
      <div className="flex flex-wrap">
        {items?.map((item) => (
          <div key={item.itemId} className="w-full md:w-1/2 lg:w-1/3 pr-4 pl-4">
            <ItemCard
              item={item}
              onClick={() => navigate(`/details/${item.itemId}`)} //onDetails
            />
            {/* pass in as a id as our url */}
            {/* doesnt run sometime in the future , keep a reference in the backpack*/}
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  item: Item;
  onClick: () => void;
};
function ItemCard({ item, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="block cursor-pointer text-gray-900 rounded border border-gray-300 mb-4">
      <div className="flex-auto p-6">
        <h5 className="font-bold mb-3">{item.name}</h5>
      </div>
    </div>
  );
}
