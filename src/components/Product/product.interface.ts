export interface IProduct {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: Array<string>;
  soldOut: boolean;
  quantity: number;
}
