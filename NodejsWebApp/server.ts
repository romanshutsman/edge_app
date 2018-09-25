import http = require('http');
import bodyParser = require('body-parser')
import express = require('express');
//import * as express from "express";
import path = require('path');

//var app = module.exports = express();
const app = express();
//let app: express.Application = express();
//app.use(bodyParser.urlencoded({ extended: false }));
var port = process.env.port || 1337;
//app.use(bodyParser.text({ type: 'text/html' }))
//var myLogger = function (req, res, next) {
//    console.log('LOGGED');
//    next();
//};

//app.use(myLogger);

app.get('', function (req, res) {
    res.send('Hello');
});
//app.use(__dirname + 'new-app/dist/new-app');

//app.use(__dirname + '/new-app');
//app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);
server.listen(port);

 //function MyFunction(): string {
 //    return Date().toLocaleString();
 //}

 //http.createServer(function (req, res) {
 //    res.writeHead(200, { 'Content-Type': 'text/plain' });
 //    res.end(MyFunction());
 //}).listen(port);




var edge = require('edge');

var hello = edge.func(function () {
    async (input) => { 
        return ".NET welcomes " + input.ToString(); 
    }
});

hello('Node.js', function (error, result) {
    if (error) throw error;
    console.log(result);
});
