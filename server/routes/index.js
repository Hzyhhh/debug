var express = require('express')
const fs = require('fs')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/api/setItem', (req, res) => {
  let data = req.body.data
  console.log(data)
  try {
    fs.writeFileSync('data.txt', JSON.stringify(data))
  } catch (error) {
    console.log('/api/setItem' + error)
  }
  res.sendStatus(200)
})

router.get('/api/getItem', (req, res) => {
  try {
    res.send(fs.readFileSync('data.txt', 'utf-8'))
  } catch (err) {
    console.log('/api/getItem' + err)
  }
})
module.exports = router
