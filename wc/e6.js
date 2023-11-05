//EVENT LOOP PROGRAM
// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
// Create an event handler as follows
var connectHandler = function connected() {
console.log('connection succesful.');
// Fire the data_received event
eventEmitter.emit('data_received');
}
// Bind the connection event with the handler
eventEmitter.on('connection',
connectHandler);
// Bind the data_received event with the anonymous
function eventEmitter.on('data_received', function() {
console.log('data received succesfully.');
});
// Fire the connection event
eventEmitter.emit('connection');
console.log("Program Ended.");


//routing_example.js
var express = require('express');
var app = express();
app.get('/', function (req, res) {
console.log("Got a GET request for the homepage");
res.send('Welcome to JavaTpoint!');
})
app.post('/', function (req, res) {
console.log("Got a POST request for the homepage");
res.send('I am Impossible! ');
})
app.delete('/del_student', function (req, res) {
console.log("Got a DELETE request for /del_student");
res.send('I am Deleted!');
})
app.get('/enrolled_student', function (req, res) {
console.log("Got a GET request for /enrolled_student");
res.send('I am an enrolled student.');
})
// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
console.log("Got a GET request for /ab*cd");
res.send('Pattern Matched.');
})
var server = app.listen(8000, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port) })