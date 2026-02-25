import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "blocks/Header";
import { SavingsTable } from "blocks/SavingsTable";
import { CurrencyRates } from "blocks/CurrencyRates";
import { SavingsStats } from "blocks/SavingsStats";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
      </Container>

      <Container>
        <Row>
          <Col>
            <SavingsTable />
          </Col>
          <Col>
            <CurrencyRates />
          </Col>
          <Col>
            <SavingsStats />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
