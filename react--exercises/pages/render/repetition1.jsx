export default function repetition1() {
    const approvedOnesList = ["Amanda", "Caio", "Isabel", "Polly"];

    function renderList(approvedOnesList) {
        return approvedOnesList.map((index, value) => (
            <li key={index}>{approvedOnesList[value]}</li>
        ));
    }

    return <ul>{renderList(approvedOnesList)}</ul>;
}

// function renderList(approvedOnesList) {
//     const items = [];

//     for (let index = 0; index < approvedOnesList.length; index++) {
//         items.push(<li key={index}>{approvedOnesList[index]}</li>);
//     }

//     return items;
// }
