import React, { useEffect } from "react";
import { Radar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
const RadarChart = ({
  scatterAndRadarSquirrelData,
  setScatterAndRadarSquirrelData,
  chartType,
}) => {
  console.log(scatterAndRadarSquirrelData);
  //api endpoint is exceeding limit w/ no account will only return approx. 1000 entries
  // const apiUrl = `https://data.cityofnewyork.us/resource/vfnx-vebw.json?$query=SELECT%20x%2C%20y%2C%20unique_squirrel_id%2C%20date%2C%20primary_fur_color%20ORDER%20BY%20date%20DESC`;

  const URL = import.meta.env.VITE_BASE_API_URL;

  const latitudeLowerRange = 40.7679908;
  const latitudeUpperRange = 40.7968755;
  const s1LongitudeLowerRange = -73.9578941;
  const s1LongitudeUpperRange = -73.9528355;
  const s2LongitudeLowerRange = -73.9618422;
  const s2LongitudeUpperRange = -73.9566177;
  const s3LongitudeLowerRange = -73.9656002;
  const s3LongitudeUpperRange = -73.960375;
  const s4LongitudeLowerRange = -73.969277;
  const s4LongitudeUpperRange = -73.9642473;
  const s5LongitudeLowerRange = -73.9728115;
  const s5LongitudeUpperRange = -73.968439;
  const s6LongitudeLowerRange = -73.9773321;
  const s6LongitudeUpperRange = -73.9731212;

  const firstSectionSquirrels = scatterAndRadarSquirrelData.filter(
    (squirrel) =>
      squirrel.x >= s1LongitudeLowerRange &&
      squirrel.x <= s1LongitudeUpperRange &&
      squirrel.y >= latitudeLowerRange &&
      squirrel.y <= latitudeUpperRange
  );

  //figure out why 2nd section doesn't get any data probably the boundaries + conditionals given to filter data
  const secondSectionSquirrels = scatterAndRadarSquirrelData.filter(
    (squirrel) =>
      squirrel.x >= s2LongitudeLowerRange &&
      squirrel.x <= s2LongitudeUpperRange &&
      squirrel.y >= latitudeLowerRange &&
      squirrel.y <= latitudeUpperRange
  );

  const thirdSectionSquirrels = scatterAndRadarSquirrelData.filter(
    (squirrel) =>
      squirrel.x >= s3LongitudeLowerRange &&
      squirrel.x <= s3LongitudeUpperRange &&
      squirrel.y >= latitudeLowerRange &&
      squirrel.y <= latitudeUpperRange
  );

  const fourthSectionSquirrels = scatterAndRadarSquirrelData.filter(
    (squirrel) =>
      squirrel.x >= s4LongitudeLowerRange &&
      squirrel.x <= s4LongitudeUpperRange &&
      squirrel.y >= latitudeLowerRange &&
      squirrel.y <= latitudeUpperRange
  );

  const fifthSectionSquirrels = scatterAndRadarSquirrelData.filter(
    (squirrel) =>
      squirrel.x >= s5LongitudeLowerRange &&
      squirrel.x <= s5LongitudeUpperRange &&
      squirrel.y >= latitudeLowerRange &&
      squirrel.y <= latitudeUpperRange
  );

  //figure out why 6th section doesn't get any data probably the boundaries + conditionals given to filter data
  const sixthSectionSquirrels = scatterAndRadarSquirrelData.filter(
    (squirrel) =>
      squirrel.x >= s6LongitudeLowerRange &&
      squirrel.x <= s6LongitudeUpperRange &&
      squirrel.y >= latitudeLowerRange &&
      squirrel.y <= latitudeUpperRange
  );

  const colorsFiltered = (squirrels) => {
    let filteredsquirrelsByColor = {
      gray: [],
      cinnamon: [],
      black: [],
    };

    squirrels.forEach((squirrel) => {
      if (squirrel.primary_fur_color) {
        const color = squirrel.primary_fur_color.toLowerCase();

        if (color) {
          if (color === "gray") {
            filteredsquirrelsByColor.gray.push(squirrel);
            // console.log(squirrel);
          } else if (color === "cinnamon") {
            filteredsquirrelsByColor.cinnamon.push(squirrel);
            // console.log(squirrel);
          } else if (color === "black") {
            filteredsquirrelsByColor.black.push(squirrel);
            // console.log(squirrel);
          }
        }
      }
    });

    return filteredsquirrelsByColor;
  };

  const chartDataGrey = {
    labels: [
      "Section 1",
      "Section 2",
      "Section 3",
      "Section 4",
      "Section 5",
      "Section 6",
    ],
    datasets: [
      {
        label: "# of Grey Squirrels",
        data: [
          colorsFiltered(firstSectionSquirrels).gray.length,
          colorsFiltered(secondSectionSquirrels).gray.length,
          colorsFiltered(thirdSectionSquirrels).gray.length,
          colorsFiltered(fourthSectionSquirrels).gray.length,
          colorsFiltered(fifthSectionSquirrels).gray.length,
          colorsFiltered(sixthSectionSquirrels).gray.length,
          colorsFiltered(firstSectionSquirrels).gray.length,
        ],
        fill: true,
        backgroundColor: "grey",
        borderColor: "grey",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      // {
      //   label: "Cinnamon Squirrels",
      //   data: [
      //     colorsFiltered(firstSectionSquirrels).cinnamon.length,
      //     colorsFiltered(secondSectionSquirrels).cinnamon.length,
      //     colorsFiltered(thirdSectionSquirrels).cinnamon.length,
      //     colorsFiltered(fourthSectionSquirrels).cinnamon.length,
      //     colorsFiltered(fifthSectionSquirrels).cinnamon.length,
      //     colorsFiltered(sixthSectionSquirrels).cinnamon.length,
      //     colorsFiltered(firstSectionSquirrels).cinnamon.length,
      //   ],
      //   fill: true,
      //   backgroundColor: "orange",
      //   borderColor: "orange",
      //   pointBackgroundColor: "rgb(54, 162, 235)",
      //   pointBorderColor: "#fff",
      //   pointHoverBackgroundColor: "#fff",
      //   pointHoverBorderColor: "rgb(54, 162, 235)",
      // },
      // {
      //   label: "Black Squirrels",
      //   data: [
      //     colorsFiltered(firstSectionSquirrels).black.length,
      //     colorsFiltered(secondSectionSquirrels).black.length,
      //     colorsFiltered(thirdSectionSquirrels).black.length,
      //     colorsFiltered(fourthSectionSquirrels).black.length,
      //     colorsFiltered(fifthSectionSquirrels).black.length,
      //     colorsFiltered(sixthSectionSquirrels).black.length,
      //     colorsFiltered(firstSectionSquirrels).black.length,
      //   ],
      //   fill: true,
      //   backgroundColor: "black",
      //   borderColor: "black",
      //   pointBackgroundColor: "rgb(255, 99, 132)",
      //   pointBorderColor: "#fff",
      //   pointHoverBackgroundColor: "#fff",
      //   pointHoverBorderColor: "rgb(255, 99, 132)",
      // },
    ],
  };

  const chartDataCinnamon = {
    labels: [
      "Section 1",
      "Section 2",
      "Section 3",
      "Section 4",
      "Section 5",
      "Section 6",
    ],
    datasets: [
      {
        label: "# of Cinnamon Squirrels",
        data: [
          colorsFiltered(firstSectionSquirrels).cinnamon.length,
          colorsFiltered(secondSectionSquirrels).cinnamon.length,
          colorsFiltered(thirdSectionSquirrels).cinnamon.length,
          colorsFiltered(fourthSectionSquirrels).cinnamon.length,
          colorsFiltered(fifthSectionSquirrels).cinnamon.length,
          colorsFiltered(sixthSectionSquirrels).cinnamon.length,
          colorsFiltered(firstSectionSquirrels).cinnamon.length,
        ],
        fill: true,
        backgroundColor: "brown",
        borderColor: "brown",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const chartDataBlack = {
    labels: [
      "Section 1",
      "Section 2",
      "Section 3",
      "Section 4",
      "Section 5",
      "Section 6",
    ],
    datasets: [
      {
        label: "# of Black Squirrels",
        data: [
          colorsFiltered(firstSectionSquirrels).black.length,
          colorsFiltered(secondSectionSquirrels).black.length,
          colorsFiltered(thirdSectionSquirrels).black.length,
          colorsFiltered(fourthSectionSquirrels).black.length,
          colorsFiltered(fifthSectionSquirrels).black.length,
          colorsFiltered(sixthSectionSquirrels).black.length,
          colorsFiltered(firstSectionSquirrels).black.length,
        ],
        fill: true,
        backgroundColor: "black",
        borderColor: "black",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const chartOptionsGrey = {
    scales: {
      r: {
        beginAtZero: true, // Ensure the chart starts from zero
        min: 0, // Set the minimum value for the scale
        max: 270, // Adjust the maximum value to include smaller data sets
        ticks: {
          stepSize: 20, // Defines the spacing between tick marks
        },
      },
    },
    elements: {
      line: {
        borderWidth: 3, // Border width of the lines in the radar chart
      },
    },
  };

  const chartOptionsCinnamon = {
    scales: {
      r: {
        beginAtZero: true, // Ensure the chart starts from zero
        min: 0, // Set the minimum value for the scale
        max: 40, // Adjust the maximum value to include smaller data sets
        ticks: {
          stepSize: 5, // Defines the spacing between tick marks
        },
      },
    },
    elements: {
      line: {
        borderWidth: 3, // Border width of the lines in the radar chart
      },
    },
  };

  const chartOptionsBlack = {
    scales: {
      r: {
        beginAtZero: true, // Ensure the chart starts from zero
        min: 0, // Set the minimum value for the scale
        max: 20, // Adjust the maximum value to include smaller data sets
        ticks: {
          stepSize: 2, // Defines the spacing between tick marks
        },
      },
    },
    elements: {
      line: {
        borderWidth: 3, // Border width of the lines in the radar chart
      },
    },
  };

  useEffect(() => {
    fetch(
      `${URL}?$query=SELECT%20x%2C%20y%2C%20unique_squirrel_id%2C%20date%2C%20primary_fur_color%20ORDER%20BY%20date%20DESC`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Response data:", data);
        setScatterAndRadarSquirrelData(data);
      })
      // .then(() => )
      .catch((error) => {
        console.error("Error updating state", error);
      });
  }, []);

  //latitude = y (i.e. 40.000000), longitude = x (i.e. -73.000000)

  // const firstSectionSquirells = squirrellData.filter((squirrel) => squirrel.x >= -73.  && squirrel.y < )
  // console.log("This is first section", firstSectionSquirrels);
  // console.log("This is second section", secondSectionSquirrels);
  // console.log("This is third section", thirdSectionSquirrels);
  // console.log("This is fourth section", fourthSectionSquirrels);
  // console.log("This is fifth section", fifthSectionSquirrels);
  // console.log("This is sixth section", sixthSectionSquirrels);

  // console.log("filtered section one", colorsFiltered(firstSectionSquirrels));

  // console.log("filtered section 3", colorsFiltered(thirdSectionSquirrels));

  return (
    <>
      <div
        style={
          chartType === "Radar" ? { display: "block" } : { display: "none" }
        }
        className="py-24"
      >
        {/* <div className="text-center text-4xl pb-12">
          Squirrel Distribution Chart In Central Park
        </div> */}
        <div
          className="flex justify-center"
          style={
            chartType === "Radar" ? { display: "block" } : { display: "none" }
          }
        >
          <div className="grid grid-cols-1 gap-8 mx-4 md:grid-cols-3">
            <div className="col-span-1 w-108 border-4 border-gray-300 rounded-xl hover:bg-gray-100 p-2">
              <Radar data={chartDataGrey} options={chartOptionsGrey} />
            </div>
            <div className="col-span-1 w-108 border-4 border-amber-800/50 rounded-xl hover:bg-amber-800/10 p-2">
              <Radar data={chartDataCinnamon} options={chartOptionsCinnamon} />
            </div>
            <div className="col-span-1 w-108 border-4 border-black/50 rounded-xl hover:bg-black/10 p-2">
              <Radar data={chartDataBlack} options={chartOptionsBlack} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RadarChart;
