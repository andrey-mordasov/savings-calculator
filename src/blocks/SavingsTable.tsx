import { useContext } from "react";
import { Table, Form, Dropdown, DropdownButton, Alert } from "react-bootstrap";
import { DepositModeContext } from "context/DepositModeContext";
import { CurrencyContext } from "context/CurrencyContext";
import { Currencies, Currency } from "types/currency";
import { Savings } from "types";
import { SavingsContext } from "context/SavingsContext";

function SavingsTableRow({
  currency,
  amount,
  rate,
  isDepositMode,
  onChange,
}: Savings & { isDepositMode: boolean; onChange: (s: Savings) => void }) {
  return (
    <tr onMouseOver={() => {}} onMouseOut={() => {}}>
      <td valign="baseline">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {currency}
          <Form.Control
            type="number"
            value={amount}
            onChange={(e) =>
              onChange({ currency, rate, amount: Number(e.target.value) })
            }
          />
        </div>
      </td>
      <td valign="baseline">{amount}</td>
      <td valign="baseline">
        <Form.Control
          type="number"
          disabled={!isDepositMode}
          value={rate}
          onChange={(e) =>
            onChange({ currency, amount, rate: Number(e.target.value) })
          }
        />
      </td>
    </tr>
  );
}

export function SavingsTable() {
  const { isDepositMode } = useContext(DepositModeContext);
  const { currency } = useContext(CurrencyContext);
  const { savings, setSavings, currencies } = useContext(SavingsContext);

  const onChangeSavings = (oldSavings: Savings, newSavings: Savings) => {
    setSavings(
      savings.map((s) => (s.currency === oldSavings.currency ? newSavings : s))
    );
  };

  const onAddCurrency = (currency: Currency) => {
    setSavings([...savings, { currency, amount: 0, rate: 0 }]);
  };

  const noMoreCurrencies = savings.length > 9;

  return (
    <>
      <Table borderless>
        <thead>
          <tr>
            <th>Savings</th>
            <th>In my currency, {currency}</th>
            <th>Deposit rates,&nbsp;%</th>
          </tr>
        </thead>

        <tbody>
          {savings.map((s) => (
            <SavingsTableRow
              key={s.currency}
              {...s}
              isDepositMode={isDepositMode}
              onChange={(newS) => onChangeSavings(s, newS)}
            />
          ))}
        </tbody>
      </Table>

      {noMoreCurrencies && <Alert>10 currencies max at first.</Alert>}

      {/* <Button>+ Currency</Button> */}
      <DropdownButton title="+ Currency" disabled={noMoreCurrencies}>
        {Object.values(Currencies).map((currency) => (
          <Dropdown.Item
            key={currency}
            onClick={() => onAddCurrency(currency)}
            disabled={currencies.includes(currency)}
          >
            {currency}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
}
