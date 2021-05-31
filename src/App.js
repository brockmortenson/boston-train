import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ schedule, setSchedule ] = useState([]);

  useEffect(() => {
    axios
      .get('https://api-v3.mbta.com/schedules?filter%5Broute%5D=filter%5B0%2C1%2C2%5D')
      .then(res => {
        console.log(res.data)
        setSchedule(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  // const scheduleArr = Object.keys(schedule);
  // console.log(scheduleArr)
  // const arr = Object.keys(scheduleArr)
  // console.log(arr)

  const mappedSchedule = schedule.data.map((schedules, index) => {
    console.log(schedules)
    return (
      <div key={index}>
        <div>{schedules}</div>
      </div>
    )
  })

  console.log(mappedSchedule)

  // .data[0].attributes.departure_time

  // route.data[attributes].departure_time
  // curl -X GET "https://api-v3.mbta.com/schedules?sort=departure_time&include=prediction&filter%5Bdate%5D=filter%5B2021-05-28&filter%5Broute_type%5D=1" -H "accept: application/vnd.api+json"
  // https://api-v3.mbta.com
  return (
    <div className="App">
      Hello
      {mappedSchedule}
    </div>
  );
}

export default App;
