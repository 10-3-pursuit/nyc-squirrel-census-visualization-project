import { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from "react-chartjs-2";

const URL = import.meta.env.VITE_BASE_API_URL;

const PieChart = ({ squirrels, setSquirrels, chartType }) => {
  useEffect(() => {
    fetch(`${URL}?$query=SELECT%20unique_squirrel_id%2C%20primary_fur_color`)
      .then((res) => res.json())
      .then((data) => setSquirrels(data));
  }, []);

  const data = {
    labels: ["Gray", "Cinnamon", "Black"],
    datasets: [
      {
        label: "Squirrel",
        data: [
          squirrels.filter((squirrel) => squirrel.primary_fur_color === "Gray")
            .length,
          squirrels.filter(
            (squirrel) => squirrel.primary_fur_color === "Cinnamon"
          ).length,
          squirrels.filter((squirrel) => squirrel.primary_fur_color === "Black")
            .length,
        ],
        backgroundColor: [
          "rgba(128,128,128, 0.5)",
          "rgba(139,69,19, 0.7)",
          "rgba(0, 0, 0, 0.7)",
        ],
        borderColor: [
          "rgba(128,128,128, 1)",
          "rgba(139,69,19, 1)",
          "rgba(0, 0, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div
      style={chartType === "Pie" ? { display: "block" } : { display: "none" }}
    >
      <Pie
        // options={options}
        data={data}
        height={"400px"}
        width={"400px"}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default PieChart;
