import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ schedule, setSchedule ] = useState([]);

  useEffect(() => {
    axios
      .get('https://api-v3.mbta.com/predictions?filter%5Broute%5D=filter%5B0%2C1%2C2%5D')
      .then(res => {
        console.log(res.data.data)
        setSchedule(res.data.data)
      })
      .catch(err => console.log(err))
  }, [])

  console.log(schedule)

  const mappedSchedule = schedule.map((schedules, index) => {
    // console.log(schedules.attributes)
    if (index <= 10) {
      return (
        <div key={index}>
        <div>{schedules.attributes.departure_time}</div>
      </div>
    )
    }
  })

  // console.log(mappedSchedule)

  return (
    <div className="App">
      <div>
        {mappedSchedule}
      </div>
    </div>
  );
}

export default App;
