import React from 'react'
import { useState, useEffect } from 'react';


const Log = () => {

const [symptoms, setSymptoms] = useState(["None"]);


const [periods, setPeriods] = useState(() => {
  const savedPeriods = localStorage.getItem("periods");

  return savedPeriods ? JSON.parse(savedPeriods) : [];
});

const currDate = new Date().toISOString().split("T")[0];
const [date, setDate] = useState(currDate);
const changeDate = (e) => {
  setDate(e.target.value);
};



const [flow, setFlow] = useState('No flow');
const changeFlow = (e) => {
  const flow = e.target.value
  setFlow(flow);

  if (flow === "Had period") {
    setWeight("Light");
  } else {
    setWeight("N/A");
  }

};

const [weight, setWeight] = useState('N/A');
const changeWeight = (e) => {
  setWeight(e.target.value);
};


// Save data to local storage whenever periods changes
useEffect(() => {
localStorage.setItem("periods", JSON.stringify(periods));
}, [periods]);

// Save data with useState and save to local storage
const recordData = (e) => {
  e.preventDefault();

  const record = {
    id: crypto.randomUUID(),
    date: date,
    flow: flow,
    weight: flow === "Had period" ? weight : null,
    symptoms: symptoms,
  };

  setPeriods((previousPeriods) => [
    ...previousPeriods,
    record
  ]);

  setDate(currDate);
  setFlow("No flow");
  setWeight("N/A");
  setSymptoms(["None"]);

};



  return (
    <div>

        <div id="periodForm">
          <h1>Record period</h1>
        <input type="date" className="dateInput" value={date} onChange={changeDate}/>
        

        <form id="logForm" onSubmit={recordData}>
          <select value={flow} onChange={changeFlow}>
            <option value="Had period">Had period</option>
            <option value="Spotting">Spotting</option>
            <option value="No flow">No flow</option>
          </select>

        

        {flow === "Had period" && 
          <select value={weight} onChange={changeWeight}>
            <option value="Light">Light flow</option>
            <option value="Regular">Regular flow</option>
            <option value="Heavy">Heavy flow</option>
        </select>
        }
        <select
          value={symptoms}
          onChange={(e) => {
            const selectedSymptoms = Array.from(
              e.target.selectedOptions,
              (option) => option.value
            );

          setSymptoms(selectedSymptoms);
          }}
          multiple>
            
          <option value="headache">Headache</option>
          <option value="cramps">Cramps</option>
          <option value="bloating">Bloating</option>
          <option value="fatigue">Fatigue</option>
        </select>

      

    <br/>

      <div className="logSubmit">
        <button type="submit">Submit!</button>
      </div>


      </form>


      </div>





      
    </div>
  )
}

export default Log
