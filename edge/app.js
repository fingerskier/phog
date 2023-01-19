const debug = require('debug')('cloud:app')
const express = require('express')
const https = require('https')
const pem = require('pem')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

let app


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}


function onListening(server) {
  // var addr = server.address();
  // var bind = typeof addr === 'string'
  //   ? 'pipe ' + addr
  //   : 'port ' + addr.port;
  // debug('Listening on ' + bind);
  debug('Listening', server)
}


pem.createCertificate({days: 111, selfSigned: true}, (err,keys)=>{
  const http = require('http')
  
  const port = normalizePort(process.env.PORT || '3456')
  
  const server = http.createServer(app)
  
  if (err) throw err
  
  app = express()

  app.set('port', port)
  
  app.use(logger('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(express.static(path.join(__dirname, 'public')))
  
  app.use('/', indexRouter)
  app.use('/users', usersRouter)


  https.createServer({
    key: keys.serviceKey,
    cert: keys.certificate,
  }, app)
  .listen(port)
  .on('error', onError)
  .on('listening', onListening)
})