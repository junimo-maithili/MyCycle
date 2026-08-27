import './App.css'
import { useState, useEffect } from 'react';


function App() {


const [symptoms, setSymptoms] = useState([]);

  const [periods, setPeriods] = useState(() => {
    const savedPeriods = localStorage.getItem("periods");
  
    return savedPeriods ? JSON.parse(savedPeriods) : [];
  });

  const [date, setDate] = useState("");
  const changeDate = (e) => {
    setDate(e.target.value);
  };

  const [flow, setFlow] = useState('No flow');
  const changeFlow = (e) => {
    setFlow(e.target.value);
  };

  const [weight, setWeight] = useState('');
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
  
  };





  
  return (
    <>
      <section id="center"> 
        <h1>Period Tracker</h1>   
        <p>Track your period with Period Tracker! All information is stored locally on your device, so your cycle information is kept secure.</p> 


        <div id="periodForm">
          <h1>Record period</h1>
        <input type="date" value={date} onChange={changeDate}/>
        

        <form onSubmit={recordData}>
          <select value={flow} onChange={changeFlow}>
            <option value="Had period">Had period</option>
            <option value="Spotting">Spotting</option>
            <option value="No flow">No flow</option>
          </select>

          <br/>
        

        {flow === "Had period" && 
          <select value={weight} onChange={changeWeight}>
            <option value="Light">Light flow</option>
            <option value="Regular">Regular flow</option>
            <option value="Heavy">Heavy flow</option>
        </select>
        }

<br/>


      
      <p>Symptoms</p>
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

      <button type="submit">Record period</button>


      </form>


      </div>


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



    </section>
    </>
  )
}

export default App