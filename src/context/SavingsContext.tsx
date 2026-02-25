import {
  createContext,
  type PropsWithChildren,
  useState,
  useMemo,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Savings } from "types";
import { Currencies } from "types/currency";

const mockSavings = [
  { currency: Currencies.RUB, amount: 250_000, rate: 10 },
  { currency: Currencies.USD, amount: 5_000, rate: 4 },
  { currency: Currencies.EUR, amount: 4_000, rate: 3 },
];

export const SavingsContext = createContext<{
  savings: Array<Savings>;
  currencies: Array<Partial<keyof typeof Currencies>>;
  setSavings: Dispatch<SetStateAction<Array<Savings>>>;
}>({
  savings: [],
  currencies: [],
  setSavings: () => {},
});

export function SavingsContextProvider({ children }: PropsWithChildren) {
  const [savings, setSavings] = useState<Array<Savings>>(mockSavings);
  const currencies = useMemo(
    () => savings.map(({ currency }) => currency),
    [savings]
  );

  return (
    <SavingsContext.Provider value={{ savings, setSavings, currencies }}>
      {children}
    </SavingsContext.Provider>
  );
}
