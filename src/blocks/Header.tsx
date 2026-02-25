import { useContext } from "react";
import { Form } from "react-bootstrap";
import { CurrencySelector } from "blocks/CurrencySelector";
import { DepositModeContext } from "context/DepositModeContext";

export function Header() {
  const { isDepositMode, setIsDepositMode } = useContext(DepositModeContext);
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <h1 className="h4">Savings forecast... 10 years ago</h1>
        <Form.Check
          checked={isDepositMode}
          onChange={(e) => setIsDepositMode(e.target.checked)}
          label="Include deposits"
        />
      </div>

      <CurrencySelector />
    </header>
  );
}
