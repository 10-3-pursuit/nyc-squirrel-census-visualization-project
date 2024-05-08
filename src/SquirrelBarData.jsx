import { useState, useEffect } from "react"
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const URL = import.meta.env.VITE_BASE_URL

export const SquirrelBarData = () => {
    const[squirrels, setSquirrels] = useState([])
    const[uniqueLocations, setUniqueLocations] = useState([])
    const[uniqueAges, setUniqueAges] = useState([])

    useEffect(() => {
        fetch(`${URL}`).then(res => res.json()).then(data => {
          setSquirrels(data);
          // Extract unique locations
          const locations = [...new Set(data.map(squirrel => squirrel.location))];
          setUniqueLocations(locations);
        });
      }, []);
    
      useEffect(() => {
        // Extract unique ages
        const ages = [...new Set(squirrels.map(squirrel => squirrel.age))];
        setUniqueAges(ages);
      }, [squirrels]);

    const findAgeByLocation = (location) => {
        return squirrels.filter(s => s.location === location).map(s => s.age);
      }


      const data = {
        labels: uniqueLocations,
        datasets: uniqueAges.map((age, index) => ({
          label: `Age ${age}`,
          data: uniqueLocations.map(location => findAgeByLocation(location).filter(a => a === age).length),
          borderWidth: 1,
          backgroundColor: [
            'rgba(128, 128, 128, 1)',
            'rgba(54, 162, 235, 0.6)', 
            'rgba(255, 165, 0, 6)', 
          ][index % uniqueAges.length], 
        })),
      };
  
      const options = {
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            min:1,
          }
        }
      }

  return (
    <>
    <h1 className="ages-h1">Ages Sighted By Location</h1>
    <Bar data={data} options={options} />
    </>
  )
}
