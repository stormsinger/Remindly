import { useFormik } from 'formik';
import * as yup from 'yup';
import './ReminderForm.css';

export default function ReminderForm({ reminderToEdit, onClose, selectedDate, onRefresh }) {

    const getCurrentTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const formik = useFormik({
        initialValues: {
            reminder: reminderToEdit ? reminderToEdit.description : '',
            time: reminderToEdit ? reminderToEdit.dateTime : getCurrentTime()
        },
        validationSchema: yup.object({
            reminder: yup
                .string()
                .required('Priminimas yra privalomas')
                .min(1, 'Mažiausiai 1 simbolis')
                .max(200, 'Ne daugiau kaip 200 simbolių'),
            time: yup
                .string()
                .required('Laikas yra privalomas')
        }),
 
        onSubmit: values => {
            const reminderData = {
                date: selectedDate.toLocaleDateString('lt-LT'), 
                dateTime: values.time,                        
                description: values.reminder                  
            };

            const isEditing = reminderToEdit && reminderToEdit.id != null;
            const method = isEditing ? 'PUT' : 'POST';
            const url = isEditing
                ? `http://localhost:8080/reminders/${reminderToEdit.id}`
                : 'http://localhost:8080/reminders';

            fetch(url, {
                method: method,
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(reminderData)
            })
                .then(response => {
                    if (!response.ok) throw new Error('Nepavyko išsaugoti priminimo');
                    return response.json();
                })
                .then(data => {
                    onClose();
                    onRefresh();
                })
                .catch(error => {console.error('Klaida išsaugant priminimą:', error)});
        }
    });

    return (
        <form className='reminder-form' onSubmit={formik.handleSubmit}>
            <label htmlFor="reminder">Priminimas</label>
            <textarea className='reminder-input'
                type="text"
                name="reminder"
                value={formik.values.reminder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.reminder && formik.errors.reminder && (
                <div className="error">{formik.errors.reminder}</div>
            )}

            <label htmlFor="time">Laikas</label>
            <input
                type="time"
                name="time"
                value={formik.values.time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.time && formik.errors.time && (
                <div className="error">{formik.errors.time}</div>
            )}
            <button type="submit">Išsaugoti</button>
            <button type="button" onClick={onClose}>Atšaukti</button>
        </form>
    );
}