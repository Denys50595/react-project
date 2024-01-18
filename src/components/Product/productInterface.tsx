export interface ProductI {
  id: number;
  name: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: Array<string>;
  soldOut: boolean;
  showDeleteBtn?: boolean;
}
