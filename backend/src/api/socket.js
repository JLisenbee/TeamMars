function socketConnection(io) {
  // demo
  io.on('connection', (socket) => {
      // log new user connecting
      console.log(socket.id + ' connected')

      socket.on('newMsg', newMsg => {
        io.emit('newMsg', newMsg);
      });

  });
}

module.exports = { socketConnection }
