import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const chartData = [
    {
      month: "Jan",
      value: 0,
    },
    {
      month: "Feb",
      value: 0,
    },
    {
      month: "Mar",
      value: 0,
    },
    {
      month: "Apr",
      value: 0,
    },
    {
      month: "May",
      value: 0,
    },
    {
      month: "Jun",
      value: 0,
    },
    {
      month: "Jul",
      value: 0,
    },

    {
      month: "Aug",
      value: 0,
    },
    {
      month: "Sep",
      value: 0,
    },
    {
      month: "Oct",
      value: 0,
    },

    {
      month: "Nov",
      value: 0,
    },
    {
      month: "Dec",
      value: 0,
    },
  ];

  let maxExpenseValue = 0;

  for (let i = 0; i < props.expenses?.length; i++) {
    chartData[props.expenses[i].date.getMonth()].value +=
      props.expenses[i].price;
    maxExpenseValue = Math.max(maxExpenseValue, props.expenses[i].price);
  }
  return (
    <div className="chart">
      {chartData.map((monthData) => (
        <ChartBar
          key={monthData.month}
          label={monthData.month}
          value={monthData.value}
          maxValue={maxExpenseValue}
        />
      ))}
    </div>
  );
};

export default Chart;
