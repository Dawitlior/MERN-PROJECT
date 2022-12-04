import React,{useContext} from "react";
import { Table, Container } from "react-bootstrap";
import { dataContext } from "../../../contexts/allData.context";
import './comingOrders.css';

function ComingOrders() {
  const { ordersData } = useContext(dataContext);
  return (
    <Container>
      <Table>
        <thead>
          <th>מספר הזמנה</th>
          <th>שם</th>
          <th>כתובת</th>
          <th>מחיר</th>
          <th>הזמנות קודמות</th>
          <th>שנה</th>
        </thead>

        <tbody>
          {ordersData.map((item) => {
            return (
              <tr>
                <td>{item.numberOrder}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.price}</td>
                <td>{item.previousOrder}</td>
                <td>{item.year}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default ComingOrders;
