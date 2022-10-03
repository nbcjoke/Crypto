import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { History } from "../../types/history";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type LineChartProps = {
  history: History[];
};

export const LineChart = ({ history }: LineChartProps) => {
  const coinPrice = [];
  const coinDate = [];

  for (let i = 0; i < history.length; i++) {
    coinPrice.push(history[i].priceUsd);
    coinDate.push(new Date(history[i].time).toLocaleDateString());
  }

  const data = {
    labels: coinDate,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
};
