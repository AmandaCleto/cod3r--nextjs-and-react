export default function Title(props) {
    return props.small ? <h3>{props.small}</h3> : <h1>{props.title}</h1>;
}
