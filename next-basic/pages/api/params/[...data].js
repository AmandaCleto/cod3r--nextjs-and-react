
// [...data].js means that I can have as many params I want in the URL
// for instance: http://localhost:3000/api/params/123/123/asd
// will return {"params":{"data":["123","123","asd"]}}

export default function params(req, res) {
  res.status(200).json({
      params: req.query,
  })
}
