import "./App.css";
import DataProvider from "./contexts/allData.context";
import Cards from "./components/featurs/Cards/Cards";
import OrderTable from "./components/featurs/orderTable/orderTable";
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Cards />
        <OrderTable />
        
      </DataProvider>
    </div>
  );
}

export default App;
