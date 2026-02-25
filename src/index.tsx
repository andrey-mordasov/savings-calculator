import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DepositModeContextProvider } from "context/DepositModeContext";
import { CurrencyContextProvider } from "context/CurrencyContext";
import { RatesHistoryContextProvider } from "context/RatesHistoryContext";
import { SavingsContextProvider } from "context/SavingsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <DepositModeContextProvider>
      <CurrencyContextProvider>
        <SavingsContextProvider>
          <RatesHistoryContextProvider>
            <App />
          </RatesHistoryContextProvider>
        </SavingsContextProvider>
      </CurrencyContextProvider>
    </DepositModeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
