import { useState } from 'react'

type Period = {
  id: string;
  date: string;
  flow: string;
  weight: string | null;
  symptoms: string[];
};



const Logcopy = () => {

  // Function to group periods
  const groupPeriods = (periods: Period[]) => {
  // Sort the periods by date
  const sortedPeriods = [...periods].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  const cycles: Period[][] = [];

  sortedPeriods.forEach((period) => {
    const cycle = cycles[cycles.length - 1]

    // Check if no cycles are recorded
    if (!cycle) {
      cycles.push([period])
      return
    }

    // Find difference (in days) between last and current period dates
    const lastPeriod = cycle[cycle.length - 1]

    const prevDate = new Date(lastPeriod.date);
    const currentDate = new Date(period.date);
    const difference = (currentDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24);

    // If difference is a week or less, keep as the same cycle
    if (difference <= 7) {
      cycle.push(period)
    } else {
      cycles.push([period])
    }
  }) 

  return cycles
}

const [periods] = useState<Period[]>(() => {
  const savedPeriods = localStorage.getItem("periods");

  return savedPeriods ? JSON.parse(savedPeriods) : [];
});

const cycles = groupPeriods(periods);
console.log(cycles)

  return (

<div className="allRecords">
      
{cycles.map((cycle, index) => (   
        <div key={index} className="cycle"> 

          {cycle.map((period) => (
            <div className="period" key={period.id}>
              <h3 className="date">{period.date}</h3>
              <p>Flow: {period.flow}</p>
              <p>Weight: {period.weight}</p>

            <p className="symptoms"> Symptoms: {period.symptoms.join(", ")}</p>
          </div>
    ))}
        </div>
      ))}
    
    
    </div>
      


  )
}

export default Logcopy