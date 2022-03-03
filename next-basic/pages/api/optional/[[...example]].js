
// [[...example]].js means that I can have as many params I want in the URL
// for instance: http://localhost:3000/api/params/123/123/asd
// will return {"params":{"example":["123","123","asd"]}}
// more than that, you can access only http://localhost:3000/api/params/, that it will work as well, because of the double [], means that it is option to pass the param/s

export default function params(req, res) {
  res.status(200).json({
      params: req.query,
  })
}
