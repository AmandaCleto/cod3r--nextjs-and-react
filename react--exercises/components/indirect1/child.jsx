import React from "react";

export default function Child(props) {
    return (
        <div>
            <h1>Child</h1>
            <button onClick={props.function}>Talk to Dad</button>
            <button onClick={(e) => props.function(e )}>Talk to Mom</button>
            <button onClick={(_) => props.function('eaiiiii')}>Talk to Mom</button>
        </div>
    );
}
