import { useEffect, useState } from 'react'
import { SquirrelBarData } from './SquirrelBarData'
import "./SquirrelData.css"
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)



const URL = import.meta.env.VITE_BASE_URL
export const SquirrelLineData = () => {
    const[squirrels, setSquirrels] = useState([])
    const [uniqueDates, setUniqueDates] = useState([]) 

    const findSquirrelsByDate = (dates) => {
      let arr = [];
      for (let i = 0; i < dates.length; i++) {
        if(squirrels.filter(s => s.date === dates[i])) {
          const count = squirrels.filter(s => s.date === dates[i]).length
          arr.push(count)
        }
      }
      return arr;
    }
      

    const data = {
      labels: uniqueDates,
      datasets: [{
        label: 'Squirrels Sightings by Date',
        data: findSquirrelsByDate((uniqueDates)),
        borderWidth: 1
      }]
    }

    const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
    
  }
};


    useEffect(() => {
        fetch(`${URL}`).then(res => res.json()).then(data => setSquirrels(data))
    }, [])

    
    useEffect(() => {
      // Extract unique dates from squirrels and update chart data
      const uniqueDates = [...new Set(squirrels.map(squirrel => squirrel.date))];
      setUniqueDates(uniqueDates);

    //   const uniqueDates = [...new Set(squirrels.map(squirrel => {
        //     const year = squirrel.date.substring(4);
        //     const month = squirrel.date.substring(0, 2);
        //     const day = squirrel.date.substring(2, 4);
        //     const date = new Date(`${year}-${month}-${day}`);
        //     return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
        //     }))];
    
  }, [squirrels]);


  return (
    <div className="chart-container">
    <Line options={options} data={data}/>
    <SquirrelBarData />
    </div>
  )
}
