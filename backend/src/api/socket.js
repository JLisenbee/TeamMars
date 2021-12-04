function socketConnection(io) {
  // demo
  io.on('connection', (socket) => {
      // log new user connecting
      console.log(socket.id + ' connected')

      socket.on('joinRoom', roomCode => {
        socket.join(roomCode);
      });

      socket.on('leaveRoom', roomCode => {
        socket.leave(roomCode);
      });

      socket.on('newMsg', newMsg => {
        io.to(newMsg.code).emit('newMsg', newMsg);
      });
  });
}

module.exports = { socketConnection }
