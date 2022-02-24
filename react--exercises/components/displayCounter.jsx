import React from "react";

export default function DisplayCounter(props) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100px",
                width: "100px",
                borderRadius: "50px",
                backgroundColor: "#222",
                color: "#fff",
                fontSize: "4rem",
                margin: "0px 20px 0px 20px",
            }}
        >
            {props.number}
        </div>
    );
}
