const express = require('express')
const app = express()

app.use(express.static('./src/static'))

app.get('/', (req, res) => {
  res.send('OK')
})

module.exports = app