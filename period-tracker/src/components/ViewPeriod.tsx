import React from 'react'
import { useState } from 'react/';


const ViewPeriod = () => {
    const [periods, setPeriods] = useState(() => {
        const savedPeriods = localStorage.getItem("periods");
      
        return savedPeriods ? JSON.parse(savedPeriods) : [];
      });

      // Function to group periods
      const groupPeriods = (periods) => {
      // Sort the periods by date
      const sortedPeriods = [...periods].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      const cycles = [];

      sortedPeriods.forEach((period) => {
        const cycle = cycles[cycles.length - 1]

        // Check if no cycles are recorded
        if (!cycle) {
          cycles.push([period])
          return
        }

        // Find difference (in days) between last and current period dates
        const lastPeriod = cycle[cycle.length - 1]

        const prevDate = lastPeriod[lastPeriod.length -1]
        const currentDate = lastPeriod[lastPeriod.length]
        const difference = (prevDate - currentDate) / (1000*60*60*24)

        // If difference is a week or less, keep as the same cycle
        if (difference <= 7) {
          lastPeriod.push(period)
        } else {
          cycles.push([period])
        }
      }) 

      return cycles
    }

    const cycles = groupPeriods(periods);

  return (
    <div>

      {cycles.map((cycle, index) => (   
        <div key={index} className="cycle"> 
      {cycle.map((period) => (
    <div className="period" key={period.id}>
      <h3>{period.date}</h3>
      <p>Flow: {period.flow}</p>
      <p>Weight: {period.weight}</p>

      <p>Symptoms:</p>
      <ul>
        {period.symptoms.map((symptom) => (
          <li key={symptom}>{symptom}</li>
        ))}
      </ul>
    </div>
  ))}
      </div>
      ))}
    
    
    </div>
  )
}

export default ViewPeriod
