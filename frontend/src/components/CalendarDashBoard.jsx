import CalendarPanel from "./calendarPanel/CalendarPanel";
import './CalendarDashBoard.css';
import DateOverview from "./dateOverview/DateOverview";
import { useState, useEffect } from 'react';

export default function CalendarDashBoard() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {
        fetchHolidays(selectedDate.getFullYear());
    }, []);

    const fetchHolidays = (year) => {
        fetch(`http://localhost:8080/reminders/holidays/${year}`)
            .then(res => res.json())
            .then(data => setHolidays(data))
            .catch(err => console.error('Nepavyko gauti švenčių:', err));
    };

    return (
        <div className="rounded">
            <div className="calendar-wrapper shadow p-3 rounded">
                <CalendarPanel 
                    selectedDate={selectedDate} 
                    setSelectedDate={setSelectedDate} 
                    holidays={holidays}
                    fetchHolidays={fetchHolidays}
                />
                <DateOverview 
                    selectedDate={selectedDate} 
                    holidays={holidays}
                />
            </div>
        </div>
    )
}