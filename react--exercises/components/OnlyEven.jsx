export default function OnlyEven(props) {
    return props.number % 2 === 0 ? <h1>{props.number}</h1> : null;
}
