const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const port = 3000

app.get('/api/v1', (req, res) => res
   .status(200)
   .send ({ mensagem: 'Hello World'}))

app.listen(port, () => console.log( `iniciando servidor na porta ${port}`))

module.exports = app