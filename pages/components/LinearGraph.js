import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

function LinearGraph({ data, id }) {
  const [xAxisData, setXAxisData] = useState([]);
  const [yAxisData, setYAxisData] = useState([]);

  useEffect(() => {
    setXAxisData([]);
    setYAxisData([]);
    {
      data &&
        data.map((value) => {
          id === 0
            ? setXAxisData((prevValue) => [...prevValue, value.date])
            : setXAxisData((prevValue) => [...prevValue, value.day]);
          setYAxisData((prevValue) => [...prevValue, value.followers]);
        });
    }
  }, [data]);

  let dataSet = {
    labels: xAxisData,
    datasets: [
      {
        data: yAxisData,
        backgroundColor: [
          id % 3 == 1
            ? "white"
            : id % 3 == 2
            ? "white"
            : "white",
        ],
        backgroundimage: "linear-gradient(180deg, rgba(255, 255, 255, 0) 64.12%, #FFFFFF 100%)",
        borderWidth: 3,
        borderColor: [
          id % 3 == 1
            ? "#12B76A"
            : id % 3 == 2
            ? "#12B76A"
            : "#12B76A",
        ],
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        PointHoverRadius: 10,
      },
    ],
  };

  return (
    <Line
      style={{
        height: "3.5em",
        width: "100%",
      }}
      data={dataSet}
      options={{
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          y: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
              beginAtZero: true,
              suggestedMin: 0,
              suggestedMax: 1.5,
              stepValue: 0.5,
              steps: 4,
            },
          },
          x: {
            type: "time",
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
            time: {
              unit: "month",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}

export default LinearGraph;
