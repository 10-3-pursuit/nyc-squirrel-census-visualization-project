import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { Scatter } from "react-chartjs-2";

Chart.register(...registerables);

const URL = import.meta.env.VITE_BASE_API_URL;

const ScatterChart = ({
  chartType,
  scatterAndRadarSquirrelData,
  setScatterAndRadarSquirrelData,
}) => {
  const canvasRef = useRef(null);
  const ctx = canvasRef.current;

  const filterSquirrelsByColor = (color) => {
    return scatterAndRadarSquirrelData.filter((squirrel) => {
      return squirrel.primary_fur_color === color;
    });
  };

  // x is longitude key and y is latitude key
  const graySquirrelsData = filterSquirrelsByColor("Gray").reduce(
    (acc, cur) => {
      acc.push({ x: cur["x"], y: cur["y"] });
      return acc;
    },
    []
  );
  const cinnamonSquirrelsData = filterSquirrelsByColor("Cinnamon").reduce(
    (acc, cur) => {
      acc.push({ x: cur["x"], y: cur["y"] });
      return acc;
    },
    []
  );
  const blackSquirrelsData = filterSquirrelsByColor("Black").reduce(
    (acc, cur) => {
      acc.push({ x: cur["x"], y: cur["y"] });
      return acc;
    },
    []
  );

  Chart.defaults.font.size = 20;
  const scatterData = {
    datasets: [
      {
        label: "Black Squirrel Distribution",
        data: blackSquirrelsData,
        backgroundColor: "black",
      },
      {
        label: "Cinnamon Squirrel Distribution",
        data: cinnamonSquirrelsData,
        backgroundColor: "brown",
      },
      {
        label: "Gray Squirrel Distribution",
        data: graySquirrelsData,
        backgroundColor: "gray",
      },
    ],
  };
  const options = {
    scales: {
      x: {
        min: -73.982,
        max: -73.949,
      },
      y: {
        min: 40.765,
        max: 40.802,
      },
    },
    elements: {
      point: {
        radius: 8,
      },
    },
  };

  useEffect(() => {
    fetch(
      `${URL}?$query=SELECT%20x%2C%20y%2C%20unique_squirrel_id%2C%20date%2C%20primary_fur_color%20ORDER%20BY%20date%20DESC`
    )
      .then((res) => res.json())
      .then((data) => setScatterAndRadarSquirrelData(data));
  }, []);

  return (
    <div
      className="scatter-div"
      style={
        chartType === "Scatter" ? { display: "block" } : { display: "none" }
      }
    >
      <Scatter data={scatterData} options={options} />
    </div>
  );
};

export default ScatterChart;
