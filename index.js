const fs = require('fs')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

const staticBasePath = './static'
// Static file server
const staticServe = (req, res) => {  
  const fileLoc =  path.join(path.resolve(staticBasePath), req.url)
  const stream = fs.createReadStream(fileLoc)
  // Handle non-existent file
  stream.on('error', (error) => {
    res.writeHead(404, 'Not Found')
    res.write('404: File Not Found!')
    res.end()
  })
  // File exists, stream it to user
  res.statusCode = 200
  stream.pipe(res)
}

const httpServer = http.createServer(staticServe)
const io = socketio.listen(httpServer)
const state = {
  active: false,
  users: [],
  buzzes: []
}

// socket.io namespaces
const host = io.of('/host')
const user = io.of('/user')
const board = io.of('/board')

// passwords for host and users, keep it null for no pass
const pass = {
  '/host': null,
  '/user': null
}
const authorize = (socket, next) => {
  if (pass[socket.nsp.name] && socket.handshake.query.pass !== pass[socket.nsp.name]) {
    // call next() with an Error if you need to reject the connection.
    next(new Error('Authentication error'))
  } else {
    next()
  }
}
host.use(authorize)
user.use(authorize)

const activateBuzzer = (override) => {
  if (!state.active || override) {
    console.log('Activating buzzer')
    state.buzzes = [] // reset
    state.active = true
    user.emit('buzzer-activated')
    host.emit('buzzer-activated')
    board.emit('buzzer-activated')
    // io.emit('buzzer-activated')
  }
}

const deactivateBuzzer = (override) => {
  if (state.active || override) {
    console.log('Deactivating buzzer')
    state.active = false
    user.emit('buzzer-deactivated')
    host.emit('buzzer-deactivated')
    board.emit('buzzer-deactivated')
    // io.emit('buzzer-deactivated')
  }
}

board.on('connection', (socket) => {
  console.log('Board connected', socket.id)
  board.emit('current-state', state)

  socket.on('activate-buzzer', activateBuzzer)
  socket.on('deactivate-buzzer', deactivateBuzzer)
})

host.on('connection', (socket) => {
  console.log('Host connected', socket.id)
  socket.emit('current-state', state)

  socket.on('activate-buzzer', activateBuzzer)
  socket.on('deactivate-buzzer', deactivateBuzzer)

  socket.on('start-countdown', (data) => {
    console.log(`Starting countdown for ${data.sec} seconds`)
    // set current state to opposite of what countover action will do
    state.active = (data.action !== 'activate-buzzer')
    user.emit('countdown-started', data)
    host.emit('countdown-started', data)
    board.emit('countdown-started', data)
    // io.emit('countdown-started', data)
  })

  socket.on('restart-event', () => {
    console.log('Restarting event')
    state.active = false
    state.users = []
    state.buzzes = []
    user.emit('event-restarted')
    host.emit('event-restarted')
    board.emit('event-restarted')
    // io.emit('event-restarted')
  })
})

user.on('connection', (socket) => {
  socket.on('user-connected', (name) => {
    console.log(`User ${name} connected`, socket.id)
    state.users.push(name)
    host.emit('user-joined', name)
    socket.uname = name
  })

  socket.on('buzz', () => {
    if (state.active) {
      state.buzzes.push(socket.uname)
      console.log(`Buzz from ${socket.uname}`)
      board.emit('user-buzzed', socket.uname)
      host.emit('user-buzzed', socket.uname)
      // io.emit('user-buzzed', socket.uname)
    } else {
      console.log(`Inactive buzz from ${socket.uname}`)
    }
  })

  socket.on('disconnect', () => {
    state.users.splice(state.users.indexOf(socket.uname), 1)
    host.emit('current-state', state)
  })
})

httpServer.listen(4000, '0.0.0.0', function() {
  console.log('Listening at: http://localhost:4000')
})
