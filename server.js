let express = require('express')
let path = require('path')
let app = express()

app.use(express.static(path.join(__dirname, 'dist')))

//app.get('/', function(req, res) {
//  res.send('This is my first server!');
//})

app.listen(80, function() {
  console.log('serving from port 80')
})
