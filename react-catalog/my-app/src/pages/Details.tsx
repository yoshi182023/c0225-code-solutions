import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { type Product, readProduct } from '../lib';

// export type Product = {
//   productId: number;
//   name: string;
//   imageUrl: string;
//   price: number;
//   shortDescription: string;
//   longDescription: string;
// };

export function Details() {
  const [item, setItem] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const { productId } = useParams();
  // destructing

  useEffect(() => {
    async function loadItem(productId: number) {
      try {
        const item = await readProduct(productId);
        setItem(item);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadItem(+productId);
    }
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !item) {
    return (
      <div>
        Error Loading Item {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  console.log(item);
  const { name, imageUrl, shortDescription, longDescription } = item;
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="flex-auto p-6">
          <Link to="/" className="p-3 text-gray-600 cursor-pointer">
            {' '}
            Back to Catalog
          </Link>
          {/* <div onClick={onDone} className="p-3 text-gray-600 cursor-pointer">
            &lt; Back to Dashboard
          </div> */}
          {/* 使用 Link 替代原来的 div 和 onClick */}

          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4">
              <img
                src={imageUrl}
                alt={longDescription}
                className="w-full h-80 object-contain"
              />
            </div>
            <h2 className="w-full sm:w-1/2 md:w-3/5 px-4 font-bold">{name}</h2>
          </div>
          <div className="px-4">
            <p className="whitespace-pre-wrap">{shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
