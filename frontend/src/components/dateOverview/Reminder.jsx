import './Reminder.css';

export default function Reminder({ reminder, onDelete, onEdit }) {
  return (
    <div className="reminder-overview">
      <p className="time-box">{reminder.dateTime}</p>
      <p 
        className="reminder" 
        onClick={() => onEdit(reminder)}
      >
        {reminder.description}
      </p>

      <button 
        className="remove-button " 
        onClick={() => onDelete(reminder.id)}
      >
        Šalinti
      </button>
    </div>
  );
}
