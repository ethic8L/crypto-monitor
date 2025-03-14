import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    if (historicalData?.prices) {
      const formattedData = [
        ["Date", "Prices"], // Nagłówki muszą być tablicą
        ...historicalData.prices.map((item) => [
          new Date(item[0]).toLocaleDateString().slice(0, -5),
          item[1],
        ]),
      ];
      setData(formattedData);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="100%"
      options={{
        legend: { position: "bottom" },
      }}
    />
  );
};

export default LineChart;
