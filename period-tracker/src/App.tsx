import './App.css'
import { useState } from 'react';


function App() {

  const [date, setDate] = useState("");
  const changeDate = (e) => {
    setDate(e.target.value);
  };

  const [flow, setFlow] = useState('No flow');
  const changeFlow = (e) => {
    setFlow(e.target.value);
  };

  const [weight, setWeight] = useState('Light flow');
  const changeWeight = (e) => {
    setWeight(e.target.value);
  };


const [symptoms, setSymptoms] = useState([]);
const symptomOptions = ["s1", "s2", "s3"];
const [symptomSearch, setSymptomSearch] = useState("");

const filteredItems = symptomOptions.filter((symptom) =>
  symptom.toLowerCase().includes(symptomSearch.toLowerCase())
);

const addSymptom = (symptom) => {
  if (!symptoms.includes(symptom)) {
    setSymptoms((prevSymptoms) => [...prevSymptoms, symptom]);
  }
  setSymptomSearch("");
};
  



  return (
    <>
      <section id="center">   
        <h1>Period Tracker</h1>   
        <p>Track your period with Period Tracker! All information is stored locally on your device, so your cycle information is kept secure.</p> 

        <input type="date" value={date} onChange={changeDate}/>

        <form>
          <select value={flow} onChange={changeFlow}>
            <option value="Had period">Had period</option>
            <option value="Spotting">Spotting</option>
            <option value="No flow">No flow</option>
          </select>
          <button type="submit">Record period</button>
        </form>

        

        {flow === "Had period" && 
          <select value={weight} onChange={changeWeight}>
            <option value="Light">Light flow</option>
            <option value="Medium">Medium flow</option>
            <option value="Heavy">Heavy flow</option>
        </select>
        }


      <input type="text" value={symptomSearch} onChange={(e) => setSymptomSearch(e.target.value)}/>
      <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>
              <button onClick={() => addSymptom(item)}>{item}</button>
            </li>
          ))}
      </ul>

    </section>
    </>
  )
}

export default App
