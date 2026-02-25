import { Dropdown } from "react-bootstrap";
import { CurrencyContext } from "context/CurrencyContext";
import { useContext } from "react";
import { Currencies } from "types/currency";

export function CurrencySelector() {
  const { currency, setCurrency } = useContext(CurrencyContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      My currency
      <Dropdown>
        <Dropdown.Toggle variant="outline-primary">{currency}</Dropdown.Toggle>

        <Dropdown.Menu>
          {Object.values(Currencies).map((currency) => (
            <Dropdown.Item onClick={() => setCurrency(currency)}>
              {currency}
            </Dropdown.Item>
          ))}
          {/* <Dropdown.Item>EUR</Dropdown.Item>
          <Dropdown.Item>RUB</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
