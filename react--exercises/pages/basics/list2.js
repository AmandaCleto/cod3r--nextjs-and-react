/*

- generate a list of 10 spans

*/

function generateList(max) {
    const list = [];
    for (let index = 0; index < max; index++) {
        list.push(<span key={index}>{index}, </span>);
    }

    return list;
}

export default function list1() {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div>
            <h1>Lista</h1>
            {generateList(20)}
        </div>
    );
}
