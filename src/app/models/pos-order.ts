export interface PosOrderItem {
  foodMenuId: number;
  salesPrice: number;
  quantity: number;
}

export interface PosOrder {
  customerId: number | null;
  tableId: number | null;
  waiterId: number | null;
  deliveryId: number | null;
  options: string;
  total: number;
  vatAmount: number;
  grandTotal: number;
  paymentStatus: string;
  paymentType: string | null;
  hold: boolean | null;
  items: PosOrderItem[];
}