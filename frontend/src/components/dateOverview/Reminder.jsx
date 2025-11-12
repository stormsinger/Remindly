import { useState } from 'react';
import './Reminder.css';

export default function Reminder({ reminder, onDelete }) {
  return (
    <div className="reminder-overview">
      <p className="time-box">{reminder.dateTime}</p>
      <p className="reminder">{reminder.description}</p>
      <button className="remove-button" onClick={() => onDelete(reminder.id)}>
        Šalinti
      </button>
    </div>
  );
}
