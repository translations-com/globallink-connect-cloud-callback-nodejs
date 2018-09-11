const Hapi = require('hapi');


var Routes = require('./route');

const server = new Hapi.Server();

server.connection({port: 9005, host: '0.0.0.0'});

server.route(Routes);

server.start(function (err) {
    if (err) {
        throw err;
    }
    else{
    console.log('Server is running at:' + server.info.uri);}
});
