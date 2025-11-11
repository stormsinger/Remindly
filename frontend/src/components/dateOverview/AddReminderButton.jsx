export default function AddReminderButton({ onClick }) {
    return (
        <button className="add-reminder-button" onClick={onClick}>
            + Pridėti
        </button>
    );
}