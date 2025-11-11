import { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarPanel.css';

export default function CalendarPanel({selectedDate, setSelectedDate, holidays, fetchHolidays}) {
     
    const isHoliday = (date) => {
        return holidays.some(holiday => {
            const d = new Date(holiday.date);
            return (
                d.getFullYear() === date.getFullYear() &&
                d.getMonth() === date.getMonth() &&
                d.getDate() === date.getDate()               
            );
        });
    };

    return (
        <div >
        <Calendar 
            className = 'bg-dark rounded' 
            onChange={setSelectedDate} 
            value={selectedDate} 
            locale="lt-LT"
            onActiveStartDateChange={({ activeStartDate }) => {
                const year = activeStartDate.getFullYear();
                fetchHolidays(year);
            }}

            tileClassName={({ date }) =>
                isHoliday(date) ? 'holiday-tile' : null
            }
        />
        <p>{new Intl.DateTimeFormat('lt-LT', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
            }).format(selectedDate)}
        </p>
        </div>
    );

}


