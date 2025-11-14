import './ReminderForm.css';

export default function AddReminderButton({ onClick }) {
    return (
        <button className='reminder-button' onClick={onClick}>
            + Pridėti
        </button>
    );
}
