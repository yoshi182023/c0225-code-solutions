import { useEffect, useState } from 'react';
import { Product, readCatalog } from '../lib/read';
import { useNavigate } from 'react-router-dom';
import { toDollars } from '../lib';
// import { ProductCard } from './ProductCard';
export function Dashboard() {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadItems() {
      try {
        const values = await readCatalog();
        setItems(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true); // fast
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
      <h1>Catalog</h1>
      <hr className="py-1" />
      <div className="flex flex-wrap">
        {items?.map((item) => (
          <div
            key={item.productId}
            className="w-full md:w-1/2 lg:w-1/3 pr-4 pl-4">
            <ItemCard
              item={item} // pass in individual product
              onClick={() => navigate(`/details/${item.productId}`)}
            />
            {/* pass in as a id as our url */}
            {/* doesnt run sometime in the future , keep a reference in the backpack */}
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  item: Product;
  onClick: () => void;
};
function ItemCard({ item, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="block cursor-pointer text-gray-900 rounded border border-gray-300 mb-4">
      <img
        className="object-contain h-72 w-fu''"
        src={item.imageUrl}
        alt={item.name}
      />
      <div className="flex-auto p-6">
        <h5 className="font-bold mb-3">{item.name}</h5>
        <p className="mb-0"> {toDollars(item.price)}</p>
        <p className="mb-0"> {item.shortDescription}</p>
      </div>
    </div>
  );
}
