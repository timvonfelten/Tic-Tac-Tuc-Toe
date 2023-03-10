const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Empfangen von Client
io.on('connection', (socket) => {
  
  console.log('a user connected');

  socket.on("username", (username)=>{
    console.log("Benutzer:" + username + " ist verbunden")
  })

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Senden an Client
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

//array an server senden
  socket.on('array', (array) => {
    io.emit('array', array);
  });

});

server.listen(3000, () => {
  console.log('listening on *:3000');
});