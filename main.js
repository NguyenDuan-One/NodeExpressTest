const express = require('express')
const app = express()
const port = 3000

app.get('/Duan', (req, res) => {
  res.send('<h1>Nguyen Duan Dep trai hahah</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})