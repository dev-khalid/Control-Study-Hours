import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Row, Col, Container } from 'react-bootstrap';

const MonthlyData = () => {
  const calculateDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };
  //db theke data ene ekhane rakhte hobe 
  const selectedMonth = new Date(Date.now()).getMonth() + 1; 
  const selectedYear = new Date(Date.now()).getFullYear(); 
  const options = {
    responsive: true,
    mainAspectRatio: false,
    scales: {
      y: {
        type: 'linear',
        min: 0,
        max: 16,
      },
    },
  };
  //db theke data ene hoursStudied er moddhe rakha lagbe . 
  const hoursStudied = [6, 7, 4, 10, 5, 11, 3,6,8,2,2,6,10];

  let goodStudies = [];
  let badStudies = [];
  let bgColors = [];
  let bdColors = [];
  for (let hours of hoursStudied) {
    if (hours < 6) {
      goodStudies.push(hours); 
      badStudies.push(NaN); 
      bgColors.push('rgba(255, 99, 132, 0.2)');
      bdColors.push('rgba(255, 99, 132, 0.8)');
    } else {
      goodStudies.push(NaN);
      badStudies.push(hours); 
      bgColors.push('rgba(54, 162, 235, 0.2)');
      bdColors.push('rgba(54, 162, 235, 0.8)');
    }
  }
  let labelsAsDate = [];
  console.log(selectedYear); 
  const daysInAMonth = calculateDaysInMonth(selectedMonth, selectedYear);
  for (let i = 1; i <= daysInAMonth; i++) {
    labelsAsDate.push(
      `${i < 10 ? '0' : ''}${i}/${
        selectedMonth < 10 ? '0' : ''
      }${selectedMonth}`
    );
  }
  const data = {
    labels: labelsAsDate,
    datasets: [
      {
        label: '✅Great',
        data: goodStudies,
        backgroundColor: bgColors,
        borderColor: bdColors,
        borderWidth: 1,
      },
      {
        
        label: '❌Bad',
        data: badStudies,
        backgroundColor: bgColors,
        borderColor: bdColors,
        borderWidth: 1,
      },
    ],
  };
  return (
    <Container>
      <Row>
        <Col className="m-3">
          <Bar data={data} options={options} />
        </Col>
      </Row>
    </Container>
  );
};

export default MonthlyData;
