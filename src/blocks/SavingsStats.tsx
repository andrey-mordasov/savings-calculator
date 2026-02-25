import { useCallback, useContext, useEffect, useState, useMemo } from "react";
import { DepositModeContext } from "context/DepositModeContext";
import { CurrencyContext } from "context/CurrencyContext";
import { SavingsContext } from "context/SavingsContext";
import { fetchCurrenciesApi } from "services/api";
import { DateHistoryRates } from "types/currency";

export function SavingsStats() {
  const { isDepositMode } = useContext(DepositModeContext);
  const { currency } = useContext(CurrencyContext);
  const { savings, currencies } = useContext(SavingsContext);
  const [currentRates, setCurrentRates] = useState<DateHistoryRates>({});
  const dateNow = "2013-12-31";

  const fetchCurrentRates = useCallback(async () => {
    const { rates } = await fetchCurrenciesApi({
      base: currency,
      symbols: currencies,
      from: dateNow,
      to: dateNow,
    });

    setCurrentRates(rates[dateNow]);
  }, [currency, currencies]);

  useEffect(() => {
    fetchCurrentRates();
  }, [currency, currencies, fetchCurrentRates]);

  const currentSavings = useMemo<number>(() => {
    return savings.reduce((totalAmount, savings) => {
      const { currency: savingsCurrency, amount } = savings;
      const currencyRate = currentRates[savingsCurrency] || 1;

      return Math.round(totalAmount + amount / currencyRate);
    }, 0);
  }, [savings, currentRates]);

  const forecastSavings = useMemo<number>(() => {
    return savings.reduce((totalAmount, savings) => {
      const { currency: savingsCurrency, amount, rate } = savings;
      const currencyRate = currentRates[savingsCurrency] || 1;

      return Math.round(
        totalAmount +
          (amount * (1 + (isDepositMode ? Number(rate) : 0) / 100)) /
            currencyRate
      );
    }, 0);
  }, [savings, currentRates, isDepositMode]);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: 300,
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "100%", height: 10, background: "red" }}></div>
          <div
            style={{ width: "100%", height: 15, background: "orange" }}
          ></div>
          {isDepositMode && (
            <div
              style={{ width: "100%", height: 5, background: "lightgreen" }}
            ></div>
          )}
          <div style={{ width: "100%", height: 20, background: "green" }}></div>
          {isDepositMode && (
            <div
              style={{ width: "100%", height: 10, background: "lightblue" }}
            ></div>
          )}
          <div style={{ width: "100%", height: 25, background: "blue" }}></div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "100%", height: 15, background: "red" }}></div>
          <div
            style={{ width: "100%", height: 20, background: "orange" }}
          ></div>
          {isDepositMode && (
            <div
              style={{ width: "100%", height: 6, background: "lightgreen" }}
            ></div>
          )}
          <div style={{ width: "100%", height: 25, background: "green" }}></div>{" "}
          {isDepositMode && (
            <div
              style={{ width: "100%", height: 12, background: "lightblue" }}
            ></div>
          )}
          <div style={{ width: "100%", height: 25, background: "blue" }}></div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "100%", height: 20, background: "red" }}></div>
          <div
            style={{ width: "100%", height: 25, background: "orange" }}
          ></div>
          {isDepositMode && (
            <div
              style={{ width: "100%", height: 7, background: "lightgreen" }}
            ></div>
          )}
          <div style={{ width: "100%", height: 30, background: "green" }}></div>
          {isDepositMode && (
            <div
              style={{ width: "100%", height: 14, background: "lightblue" }}
            ></div>
          )}
          <div style={{ width: "100%", height: 25, background: "blue" }}></div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "100%", height: 25, background: "red" }}></div>
          <div
            style={{ width: "100%", height: 30, background: "orange" }}
          ></div>
          {isDepositMode && (
            <div
              style={{ width: "100%", height: 8, background: "lightgreen" }}
            ></div>
          )}
          <div style={{ width: "100%", height: 35, background: "green" }}></div>{" "}
          {isDepositMode && (
            <div
              style={{ width: "100%", height: 16, background: "lightblue" }}
            ></div>
          )}
          <div style={{ width: "100%", height: 25, background: "blue" }}></div>
        </div>
      </div>
      <div style={{ position: "absolute", width: "100%" }}>
        <div style={{ position: "absolute", left: 0 }}>
          today
          <br />
          <b>
            {currentSavings.toLocaleString()} {currency}
          </b>
        </div>
        <div style={{ position: "absolute", right: 0 }}>
          in a year
          <br />
          <span>&nbsp;</span>
          <b style={{ position: "absolute", left: 0, bottom: 0, width: 150 }}>
            {forecastSavings.toLocaleString()} {currency}
          </b>
        </div>
      </div>
    </div>
  );
}
