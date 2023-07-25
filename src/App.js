import Calendar from "./Calendar.jsx";
import './styles.css';

export default function App() {

  const days = [
    {
      name: "Sunday"
    },
    {
      name: "Monday"
    },
    {
      name: "Tuesday"
    },
    {
      name: "Wednesday"
    },
    {
      name: "Thursday"
    },
    {
      name: "Friday"
    },
    {
      name: "Saturday"
    },
  ]

  // The following creates an array of numbers from [1..28]
  const dates = Array.from({length: 28}, (x, i) => i + 1)
  
  return (
    <div className="App">
      <h1>React Calendar</h1>
      <div className="Calendar">
        {dates.map((t, index) => (
          <Calendar 
            index={index}
            days={days[index % 7].name}
            dates={t}
          />
        ))}
      </div>
    </div>
  );
}
