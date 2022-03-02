export default function Discription( {title, children} ) {
    return (
        <div className="discription">
            <h3>
                {title}
            </h3>
            <p>
                {children}
            </p>
        </div>
    )
}