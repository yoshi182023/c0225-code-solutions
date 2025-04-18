import { products } from './data';

export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  longDescription: string;
};
//only changes  front end
export async function readCatalog(): Promise<Product[]> {
  const response = await fetch('/api/products');
  if (!response.ok) throw new Error(`fetch error, ${response.status}`);
  return (await response.json()) as Product[];
}
console.log(products);
export async function readProduct(
  productId: number
): Promise<Product | undefined> {
  const response = await fetch(`/api/products/${productId}`);
  if (!response.ok) throw new Error(`fetch error, ${response.status}`);
  return (await response.json()) as Product;
}
