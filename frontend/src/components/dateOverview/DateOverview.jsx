import AddReminderButton from './AddReminderButton';
import './dateOverview.css';
import Holiday from './Holiday';
import { useState } from 'react';
import ReminderForm from './ReminderForm';

export default function DateOverview({selectedDate, holidays}) {
    const [visible, setVisible] = useState(false);

    const holiday = holidays.find(h =>
        new Date(h.date).toDateString() === selectedDate.toDateString()
    );

    return (
        <div className="date-overview">
            <Holiday holiday={holiday} />
            {!visible && <AddReminderButton onClick={() => setVisible(true)} />}
            {visible && <ReminderForm visible={visible} onClose={() => setVisible(false)} />}
        </div>
    );
}