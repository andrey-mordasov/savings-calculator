import {
  createContext,
  type PropsWithChildren,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Currencies } from "types/currency";

export const CurrencyContext = createContext<{
  currency: Currencies;
  setCurrency: Dispatch<SetStateAction<Currencies>>;
}>({
  currency: Currencies.RUB,
  setCurrency: () => {},
});

export function CurrencyContextProvider({ children }: PropsWithChildren) {
  const [currency, setCurrency] = useState<Currencies>(Currencies.RUB);
  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}
