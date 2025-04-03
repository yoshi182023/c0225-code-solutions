import { useEffect, useState } from 'react';
import { type Item, readItem } from '../lib/read';
import { Link, useParams } from 'react-router-dom';

// type Props = {
//   itemId: number;
//   onDone: () => void;
// };

// export function Details({ itemId, onDone }: Props) {

export function Details() {
  const [item, setItem] = useState<Item>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const { itemId } = useParams();
  //destructing

  useEffect(() => {
    async function loadItem(itemId: number) {
      try {
        const item = await readItem(itemId);
        setItem(item);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (itemId) {
      setIsLoading(true);
      loadItem(+itemId);
    }
  }, [itemId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !item) {
    return (
      <div>
        Error Loading Item {itemId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  const { name, image, description } = item;
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="flex-auto p-6">
          <Link to="/" className="p-3 text-gray-600 cursor-pointer">
            {' '}
            Back to Dashboard
          </Link>
          {/* <div onClick={onDone} className="p-3 text-gray-600 cursor-pointer">
            &lt; Back to Dashboard
          </div> */}
          {/* 使用 Link 替代原来的 div 和 onClick */}

          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4">
              <img
                src={image}
                alt={name}
                className="w-full h-80 object-contain"
              />
            </div>
            <h2 className="w-full sm:w-1/2 md:w-3/5 px-4 font-bold">{name}</h2>
          </div>
          <div className="px-4">
            <p className="whitespace-pre-wrap">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
