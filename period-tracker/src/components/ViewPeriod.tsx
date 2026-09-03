import React from 'react'
import { useState } from 'react/';


const ViewPeriod = () => {
    const [periods, setPeriods] = useState(() => {
        const savedPeriods = localStorage.getItem("periods");
      
        return savedPeriods ? JSON.parse(savedPeriods) : [];
      });

  return (
    <div>
      
      {periods.map((period) => (
  <div key={period.id}>
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
  )
}

export default ViewPeriod
