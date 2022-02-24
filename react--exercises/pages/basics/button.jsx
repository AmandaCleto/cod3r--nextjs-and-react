import React from "react";

function action1() {
    console.log("action 1");
}

export default function button() {
    function action2() {
        console.log("action 2");
    }
    function action5(e) {
        console.log(e);
    }
    return (
        <div>
            <button onClick={action1}>click #01</button>
            <button onClick={action2}>click #02</button>
            <button onClick={() => console.log("action 3")}>click #03</button>
            <button
                onClick={function () {
                    console.log("action 4");
                }}
            >
                click #04
            </button>
            <button onClick={action5}>click #05</button>
            <div>
                <input
                    type="text"
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>
        </div>
    );
}
