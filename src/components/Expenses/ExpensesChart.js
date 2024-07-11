import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  return (
    <div>
      <Chart expenses={props.chartData} />
    </div>
  );
};

export default ExpensesChart;
