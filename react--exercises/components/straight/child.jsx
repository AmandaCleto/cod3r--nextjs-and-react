import React from "react";

export default function Child(props) {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <h3>{props.name}</h3>
            <h2>{props.family}</h2>
        </div>
    );
}
