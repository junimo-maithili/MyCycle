import React from 'react'
import { useState, useEffect } from 'react';


const Logcopy = () => {

  const [periods, setPeriods] = useState(() => {
    const savedPeriods = localStorage.getItem("periods");
  
    return savedPeriods ? JSON.parse(savedPeriods) : [];
  });

  return (
<div className="allRecords">
      
      {periods.map((period) => (
  <div className="periodRecord" key={period.id}>
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

export default Logcopy