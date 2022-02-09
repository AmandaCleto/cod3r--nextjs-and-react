export default function jsx4() {
    const subtitle = 'I\'m using Javascript'
    return (
        <div>
            <h1>#jsx4 - integration of JS and JSX</h1>
            <h2>{subtitle}</h2>
            <h3>{2*2}</h3>
            <h4>{between(3, 1, 5)}</h4>
        </div>
    )
}

function between(value, max, min) {
    if(value >= min && value <= max ) {
        return 'yes';
    } else {
        return 'no';
    }
}