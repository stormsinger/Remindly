import './dateOverview.css';

export default function DateOverview({selectedDate, holidays}) {
    const holiday = holidays.find(h =>
        new Date(h.date).toDateString() === selectedDate.toDateString()
    );

    return (
        <div className="date-overview">
            {holiday && (
                <p>🎉 Šventė: {holiday.localName}</p>
            )}
        </div>
    );
}