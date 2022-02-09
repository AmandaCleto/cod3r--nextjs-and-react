/*

- generate a list of 10 spans

*/

export default function list1() {
    const list = [1,2,3,4,5,6,7,8,9,10];

    return(
        <div>
            <h1>Lista</h1>
            {list.map(item => <span key={item}>{item}, </span>)}
        </div>
    );
}