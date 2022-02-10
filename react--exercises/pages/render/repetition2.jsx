import productsList from "../../data/productList";

export default function repetition2() {
    function renderLines() {
        return productsList.map((product, index) => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Name</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderLines()}
                </tbody>
            </table>
        </div>

    );
}
