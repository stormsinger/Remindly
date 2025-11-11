import { useFormik } from 'formik';
import * as yup from 'yup';
import './ReminderForm.css';

export default function ReminderForm({ visible, onClose }) {
    const formik = useFormik({
        initialValues: {
            reminder: '',
            time: ''
        },
        onSubmit: values => {
            console.log('Reminder added:', values);
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
            />
            <label htmlFor="time">Laikas</label>
            <input
                type="time"
                name="time"
                value={formik.values.time}
                onChange={formik.handleChange}
            />
            <button type="submit">Išsaugoti</button>
            <button type="button" onClick={onClose}>Atšaukti</button>
        </form>
    );
}