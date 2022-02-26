export function Comp1() {
    return <h2>comp1</h2>;
}

export const Comp2 = function () {
    return <h2>comp2</h2>;
};

export default function Comp3() {
    return <h2>comp3</h2>;
}

export const Comp4 = () => <h2>comp4</h2>;

//You can export all or some as once
const Comp5 = () => {
    return <h2>comp5</h2>;
};

const Comp6 = (props) => (
    <div>
        <h2>comp4 {props.msg}</h2>
    </div>
);

export { Comp5, Comp6 };
