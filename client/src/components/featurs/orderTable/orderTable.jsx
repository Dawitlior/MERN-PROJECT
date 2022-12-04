import React, { useState, useEffect, useContext } from 'react'
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, LineController, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { dataContext } from '../../../contexts/allData.context';
import { Container } from 'react-bootstrap';
import "./orderTable.css"
ChartJs.register(CategoryScale, LinearScale, LineController, LineElement, PointElement, BarElement, Title, Tooltip, Legend)

function OrderTable() {
  const { ordersData, } = useContext(dataContext);
  
  const [chartData, setChartData] = useState({
    datasets: []
  });
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: ordersData.map((item) => item.year),
      datasets: [
        {
          label: "לתצוגה ללא גרף",
          data: ordersData.map((item) => item.numberOrder),
          borderColor: "rgb(53,162,235",
          backgroundColor: "rgba(53,162,235,0.4)"
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "הזמנות ב7 השנים האחרונות"
        },
      },
    });

  }, [ordersData])
  return (
    <Container className='tableDiv'>
      <br />
      <Line options={chartOptions} data={chartData} />
    </Container>
  )
}

export default OrderTable