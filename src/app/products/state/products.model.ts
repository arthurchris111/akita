export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

export function createProduct(params: Partial<Product>) {
  return {} as Product;
}
