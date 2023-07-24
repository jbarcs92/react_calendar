import CalendarItem from "./CalendarItem.jsx";
import "./Calendar.css";

export default function Calendar({ days, dates }) {
    const calendarItems = dates.map((t, d) => (
        <CalendarItem date={t} day={d} />
    ));
    return <ul className="Calendar">{calendarItems}</ul>;
}

// export default function Calendar({ items }) {
//     const calendarItems = items.map((t, d) => (
//         <CalendarItem day={t} date={d} />
//     ));
//     return <ul>{calendarItems}</ul>;
// }

// export default function Calendar({ days, dates }) {
//     const calendarItems = days.map((t, d) => (
//         <CalendarItem day={t} date={d} />
//     ));
//     return <ul>{calendarItems}</ul>;
// }

// export default function Calendar({ dates }) {
//     const calendarItems = dates.map((t, d) => (
//         <CalendarItem date={t} day={d} />
//     ));
//     return <ul>{calendarItems}</ul>;
// }


