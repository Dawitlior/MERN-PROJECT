import DataProvider from "./contexts/allData.context";
import Cards from "./components/featurs/Cards/Cards";
import OrderTable from "./components/featurs/orderTable/orderTable";
import LastOrders from "./components/featurs/LastOrders/LastOrders";
import Navbar from "./components/featurs/navbar/navbar";
import { Container } from "react-bootstrap";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Container style={{ backgroundColor: "#ececec" }} className="App">
        <DataProvider>
          <br/>
          <Cards />
          <OrderTable />
          <LastOrders />
        </DataProvider>
      </Container>
    </>
  );
}

export default App;
