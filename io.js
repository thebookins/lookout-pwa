const socketIO = require('socket.io');

module.exports = (server) => {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('disconnect', function(){
      console.log('user disconnected');
    });

    socket.on('add-message', (message) => {
      io.emit('message', {type:'new-message', text: message});
    });
  });

  let glucose = 100;
  setInterval(() => {
    io.emit('glucose', {readDate: Date.now(), glucose});
    glucose += 1;
    if (glucose >= 200) glucose = 100;
  }, 1000);
};
