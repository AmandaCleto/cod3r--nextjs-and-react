export default (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json({
            method: 'Sucesso'
        })
    } else {
        res.status(200).json({
            method: 'Não sucesso'
        })
    }
}