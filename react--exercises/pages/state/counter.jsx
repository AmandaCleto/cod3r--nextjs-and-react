import React, { useState } from "react";
import DisplayCounter from "../../components/displayCounter";

export default function counter() {
    const [counter, setCounter] = useState(0);

    const increase = () => setCounter(counter + 1);

    const decrease = () => setCounter(counter - 1);

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >

            <button onClick={increase}>Increase</button>
            <DisplayCounter number={counter} />
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}
