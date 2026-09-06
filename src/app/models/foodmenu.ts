
export interface Foodmenu {
  id?: number;

  foodmenuName: string;

  catagoryId: number;

  foodingredientId: number;

  salesPrice: number;

  vatId: number;

  description: string;

  vegItem: boolean;

  beverage: boolean;

  bar: boolean;

  photo: string;
}