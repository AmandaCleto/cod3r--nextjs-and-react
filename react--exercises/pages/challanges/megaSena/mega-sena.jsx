import React from "react";
import { mega } from "../../../functions/mega";

export default function megaSena() {
    const containerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
    };
    const ballSectionStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "20px",

        maxWidth: "300px",
    };
    const ballStyle = {
        backgroundColor: "#262626",
        height: "40px",
        width: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "20px",
        color: "#fff",
        marginRight: "10px",
        marginBottom: "20px",
    };

    const [value, setValue] = React.useState(6);
    const [megaSenaValues, setMegaSenaValues] = React.useState([]);

    function generateMegaSena(amount) {
        if (!amount) {
            return alert("Please enter a valid number!");
        }

        if (amount < 6 && amount > 20) {
            return alert("You must enter a number between 6 and 60!");
        }

        return setMegaSenaValues(mega(amount));
    }

    return (
        <div style={containerStyle}>
          <h1>Generate the MegaSena Number</h1>
            <div>
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    min={6}
                    max={20}
                />
                <button onClick={() => generateMegaSena(value)}>Send</button>
            </div>
            <section style={ballSectionStyle}>
                {megaSenaValues.map((e) => (
                    <div key={e} style={ballStyle}>
                        {e}
                    </div>
                ))}
            </section>
        </div>
    );
}
