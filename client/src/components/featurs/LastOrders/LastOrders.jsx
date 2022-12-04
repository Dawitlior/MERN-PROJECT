import React from "react";
import { useContext } from "react";
import { dataContext } from "../../../contexts/allData.context";
import "./lastOrders.css";
import { Container } from "react-bootstrap";
import ComingOrders from "../comingOrders/ComingOrders";

const LastOrders = () => {
  const { ordersData } = useContext(dataContext);
  return (
    <Container className="showCaseContainer container-fluid mt-5 mb-5">
      <div className="ShowCase circleShowCase text-center">
        <div className=" one  text-center fs-5">
          משתמשים ב30 יום האחרונים
          <div className="inside">
            <div className="circle">
              <h2>
                {ordersData.map((item) => {
                  if (item.numberOrder == 78) {
                    return item.numberOrder;
                  }
                })}
              </h2>
              <span className="insideSpan text-dark">מתוך 234</span>
            </div>
          </div>
        </div>

        <div className=" two text-center fs-5">
          הזמנות ב-30 ימים האחרונים
          <div className="inside">
            <div className="circle">
              <h2>
                {ordersData.map((item) => {
                  if (item.price == 200) {
                    return item.price;
                  }
                })}
              </h2>
              <span className="insideSpan text-dark">מתוך 653</span>
            </div>
          </div>
        </div>
      </div>

      <div className="comingOrders">
        <ComingOrders />
      </div>
    </Container>
  );
};

// <div className="experience" id='experience'>
//     <div className="achievement">
//         <div> הזמנות ב-30 ימים האחרונים </div>
//         <div className="circle mt-5 ">1+</div>
//         <span>years </span>
//         <span>Experience</span>
//     </div>
//     <div className="achievement">
//         <div> משתמשים ב-30 ימים האחרונים </div>
//         <div className="circle  mt-5">20+</div>
//         <span>completed </span>
//         <span>Projects</span>
//     </div>
// </div>
// )
// }

export default LastOrders;
