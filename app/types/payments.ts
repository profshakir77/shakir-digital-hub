export type PaymentMethod =
  | "jazzcash"
  | "easypaisa"
  | "card";

export type PaymentStatus =
  | "pending"
  | "completed"
  | "failed";

export interface Payment {
  id?: string;
  userId: string;
  courseId: string;
  courseTitle: string;
  amount: number;
  paymentMethod: PaymentMethod;
  status: PaymentStatus;
  transactionId?: string;
  createdAt: any;
}