const isDev = process.env.NODE_ENV !== 'production'
const port = isDev ? 3000 : process.env.PORT
const app = require('./config')

app.get('/', function(req, res) {
  res.render('home')
})

app.get('/editor', function(req, res) {
  res.render('editor', { title: '| Editor' })
})

app.get('/editor/*', function(req, res) {
  res.render('editor', { title: '| Editor' })
})

app.listen(port, '0.0.0.0', function _onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('==> 🌎  Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port)
})