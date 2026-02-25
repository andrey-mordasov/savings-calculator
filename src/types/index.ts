import { Currency } from "types/currency";

export interface Savings {
  currency: Currency;
  amount: number;
  rate?: number;
}
