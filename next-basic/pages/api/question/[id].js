export default function question(req, res) {
    if (req.method === "GET") {
        get(req, res);
    } else {
        req.status(405).send();
    }
}

function get(req, res) {
    const id = req.query.id;
    res.status(200).send({
        id: id,
        question: "Qual sua cor favorita?",
        answers: ["branca", "vermelha", "azul", "verde", "preto", "amarelo"],
    });
}
