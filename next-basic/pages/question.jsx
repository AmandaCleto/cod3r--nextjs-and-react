import { useEffect, useState } from "react";

export default function question() {
    const [question, setQuestion] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/api/question/123")
            .then((resp) => resp.json())
            .then(setQuestion);
    });

    function renderAnswers() {
        if (question) {
            return question.answers.map((resp, i) => {
                return <li key={i}>{resp}</li>;
            });
        }
    }

    return (
        <div>
            <h1>Question</h1>
            <span>{question?.id} - {question?.question}</span>
            <span>{renderAnswers()}</span>
        </div>
    );
}
