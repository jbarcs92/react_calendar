import "./CalendarItem.css";

export default function CalendarItem({ day, date }) {
    return (
        <li className="CalendarItem">
            {day.name}
            {date}
        </li>
    );
}