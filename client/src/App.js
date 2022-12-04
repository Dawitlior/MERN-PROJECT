import "./App.css";
import DataProvider from "./contexts/allData.context";
import Cards from "./components/featurs/Cards/Cards";
import OrderTable from "./components/featurs/orderTable/orderTable";
import LastOrders from "./components/featurs/LastOrders/LastOrders";
import Navbar from "./components/featurs/navbar/navbar";
import { Col, Container, Row } from "react-bootstrap";
function App() {
  return (
    <>
      <Container style={{ backgroundColor: "#ececec" }} className="App">
      <Navbar />
        <DataProvider>
          <Cards />
          <OrderTable />
          <LastOrders />
          {/* <Row>
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
          <Row>
          <Col className="col-sm-12 col-md-6">
            <LastOrders />
            </Col>
          </Row> */}
        </DataProvider>
      </Container>
    </>
  );
}

export default App;
