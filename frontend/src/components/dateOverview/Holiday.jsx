export default function Holiday({holiday}) {    return (
        <>
            {holiday && (
                <p>🎉 Šventė: {holiday.localName}</p>
            )}
        </>
    )
}