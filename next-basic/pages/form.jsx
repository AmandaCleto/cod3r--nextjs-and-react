import { useState } from "react";

export default function form() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [users, setUsers] = useState([]);

    async function salvarUsuario() {
        await fetch("/api/form", {
            method: "POST",
            body: JSON.stringify({
                name,
                age,
            }),
        });

        setName("");
        setAge(0);

        const response = await fetch("/api/form");
        const responseUsers = await response.json();
        setUsers(responseUsers);
    }

    function renderUsers() {
        return users.map((user, i) => {
            return (
                <li key={i}>
                    {user.name} - {user.age}
                </li>
            );
        });
    }

    return (
        <div>
            <h1>Integrando com API #02</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                value={age}
                onChange={(e) => setAge(+e.target.value)}
            />
            <button onClick={salvarUsuario}>Salvar usuário</button>

            <ul>{renderUsers()}</ul>
        </div>
    );
}
