import AddReminderButton from './AddReminderButton';
import './dateOverview.css';
import Holiday from './Holiday';
import ReminderForm from './ReminderForm';
import Reminder from './Reminder';
import { useEffect, useState } from 'react';

export default function DateOverview({selectedDate, holidays}) {
    const [visible, setVisible] = useState(false);
    const [reminders, setReminders] = useState([]);

    const fetchReminders = (year) => {
        fetch(`http://localhost:8080/reminders`)
            .then(response => response.json())
            .then(data => setReminders(data))
            .catch(err => console.error('Nepavyko gauti priminimų:', err));
    };

    useEffect(() => {
    fetchReminders();
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/reminders/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
            setReminders(prev => prev.filter(r => r.id !== id));
            })
            .catch(err => console.error('Nepavyko pašalinti priminimo:', err));
    };

    const holiday = holidays.find(h =>
        new Date(h.date).toDateString() === selectedDate.toDateString()
    );

    const formatDate = (date) => {
        return date.toLocaleDateString('lt-LT');
    };

    return (
        <div className="date-overview">
            <Holiday holiday={holiday} />
            {!visible && reminders.filter(reminder => reminder.date === formatDate(selectedDate)).map(reminder => (
            <Reminder 
                key={reminder.id} 
                reminder={reminder} 
                onDelete={handleDelete} 
            />
            ))}
            {!visible && <AddReminderButton onClick={() => setVisible(true)} />}
            {visible && 
            <ReminderForm 
                visible={visible} 
                onClose={() => setVisible(false)} 
                selectedDate={selectedDate} 
            />}
        </div>
    );
}