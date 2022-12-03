import "./App.css";
import DataProvider from "./contexts/allData.context";
import Cards from "./components/featurs/Cards/Cards";
import OrderTable from "./components/featurs/orderTable/orderTable";
import Navbar from "./components/featurs/navbar/navbar";
import { Col, Container, Row } from "react-bootstrap";
function App() {
  return (
    <Container>
      <DataProvider>
        <Row>
          <Col>
            <Navbar />
          </Col>
        </Row>
        <Row>
          <Cards />
        </Row>
        <Row>
          <OrderTable />
        </Row>
      </DataProvider>
    </Container>
  );
}

export default App;
