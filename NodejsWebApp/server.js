"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
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
    (input) => __awaiter(this, void 0, void 0, function* () {
        return ".NET welcomes " + input.ToString();
    });
});
hello('Node.js', function (error, result) {
    if (error)
        throw error;
    console.log(result);
});
//# sourceMappingURL=server.js.map