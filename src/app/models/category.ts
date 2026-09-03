export interface Category {
  id: number;
  categoryName: string;
  description: string;
  foodmenus: any[];
  ingredients: any[];
}

export interface CreateCategory {
  categoryName: string;
  description: string;
}