import React, { useState } from "react";

export default function mouse() {
    const styles = {
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function whenMove(e) {
        setX(e.clientX);
        setY(e.clientY);
    }
    return (
        <div style={styles} onMouseMove={whenMove}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    );
}
