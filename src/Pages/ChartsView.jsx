import { useState } from "react";
import PieChart from "../Components/PieChart";
import ScatterChart from "../Components/ScatterChart";
import Chart from "chart.js/auto";
import DropDownMenu from "../Components/DropDownMenu";
import RadarChart from "../Components/RadarChart";
import "../Components/Chart.css";

const ChartsView = () => {
  const [chartType, setChartType] = useState("Pie");
  const [scatterAndRadarSquirrelData, setScatterAndRadarSquirrelData] =
    useState([]);
  const [squirrels, setSquirrels] = useState([]);

  return (
    <div>
      <DropDownMenu chartType={chartType} setChartType={setChartType} />
      <PieChart
        chartType={chartType}
        squirrels={squirrels}
        setSquirrels={setSquirrels}
      />
      <RadarChart
        chartType={chartType}
        scatterAndRadarSquirrelData={scatterAndRadarSquirrelData}
        setScatterAndRadarSquirrelData={setScatterAndRadarSquirrelData}
      />
      <ScatterChart
        chartType={chartType}
        scatterAndRadarSquirrelData={scatterAndRadarSquirrelData}
        setScatterAndRadarSquirrelData={setScatterAndRadarSquirrelData}
      />
    </div>
  );
};

export default ChartsView;
