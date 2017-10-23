const http = require('http')
const fs = require('fs')
const formidable = require('formidable')
const util = require('util')
const User = require('./models/user.js')

const server = http.createServer(function (req, res) {
  if (req.method.toLowerCase() === 'get') {
    displayFormData(res)
  } else if (req.method.toLowerCase() === 'post') {
    processFields(req, res)
  }
})

const displayFormData = (res) => {
  fs.readFile('index.html', (err, data) => {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': data.length
    })
    res.write(data)
    res.end()
  })
}

const processFields = (req, res) => {
  let form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) => {
    res.writeHead(200, {
      'content-type': 'application/json'
    })
    res.write('how in the world...')
    res.end(JSON.stringify(fields), () => {
      let name = fields.name
      let age = Number(fields.age)
      let gender = fields.gender
      let condition = fields.condition
      let user = new User(name, age, gender, condition)
      let quote = user.discount()
      console.log('quote:', '$' + quote)
    })
  })
}

server.listen(3000)
console.log('listening on port 3000')
