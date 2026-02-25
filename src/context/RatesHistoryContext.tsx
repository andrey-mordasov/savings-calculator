import { createContext, useCallback, useContext, useEffect } from "react";
import { useState, type PropsWithChildren } from "react";
import { Currencies, RatesHistory } from "types/currency";
import { CurrencyContext } from "./CurrencyContext";
import { SavingsContext } from "./SavingsContext";
import { fetchCurrenciesApi } from "services/api";

export const RatesHistoryContext = createContext<{
  ratesHistory: RatesHistory;
}>({
  ratesHistory: {},
});

export function RatesHistoryContextProvider({ children }: PropsWithChildren) {
  const [ratesHistory, setRatesHistory] = useState<RatesHistory>({});
  const { currency = Currencies.EUR } = useContext(CurrencyContext);
  const { currencies } = useContext(SavingsContext);

  const fetchRatesHistory = useCallback(async () => {
    const { rates } = await fetchCurrenciesApi({
      base: currency,
      symbols: currencies,
    });
    setRatesHistory(rates);
  }, [currency, currencies]);

  useEffect(() => {
    fetchRatesHistory();
  }, [fetchRatesHistory, currency]);

  return (
    <RatesHistoryContext
      value={{
        ratesHistory,
      }}
    >
      {children}
    </RatesHistoryContext>
  );
}
