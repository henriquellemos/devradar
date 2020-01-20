import socketio from 'socket.io-client';

// Verity
/*const socket = socketio('http://192.168.15.39:3333', {
    autoConnect: false,
});*/

// Casa
const socket = socketio('http://192.168.1.80:3333', {
    autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };
    
    socket.connect();
}

function disconnect() {
    if(socket.connected) socket.connect();
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};