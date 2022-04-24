
// 113 -  Understanding Modules

// const { trymodule, sub } = require('./trymodule.js');

// console.log(trymodule(3, 4));
// console.log((sub(8, 3)));

// console.log(__filename);

// ------------------------------------------------------

// 114 - Exercise MiniCalculator (with Command Line Arguments)

// const add = require('./calculator/add');
// const sub = require('./calculator/sub');
// const mul = require('./calculator/mul');
// const div = require('./calculator/div');

// const a = parseInt(process.argv[2]);

// const choice = process.argv[3];

// const b = parseInt(process.argv[4]);

// console.log(a, choice, b);

// if (choice === 'ADD') {
//     console.log(add(a, b));
// } else if (choice === 'SUB') {
//     console.log(sub(a, b));
// } else if (choice === 'MUL') {
//     console.log(mul(a, b));
// } else if (choice === 'DIV') {
//     console.log(div(a, b));
// } else {
//     console.log('Invalid choice');
// }

// ----------------------------------------------------------

// 115 - File System Module(with Callbacks)

// const fs = require('fs');

// fs.writeFile('./app.txt', 'hi easy learn', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File just created');
//     }
// })


// data - allows you to access app.txt's text data
// fs.readFile('./app.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })


// fs.rename('./app.txt', './helper.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File succefuly renamed');
//     }
// })


// fs.unlink('./helper.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File deleted succesfuly');
//     }
// })

// Command to run in terminal: node script.js

// ----------------------------------------------------------

// 116 - Exercise Read and Write File Simultaneously

// ----------------------------------------------------------

// 117 - HTTP Module

// const http = require('http');

// req - are all incoming messages
// res - is response to the server

// so, we're using req here by creating server
// const server = http.createServer((req, res) => {
//     console.log('server is running ...');

// displays: status code, types of content: 'text/plain'
// res.writeHead(200, { 'Content-Type': 'text/html' });

// and here is res (response)
//     res.end('<h1>hi elkhan</h1>')
// })

// server.listen(3000);

// Command to run in terminal: npm run server

// ----------------------------------------------------------

// 118 - Exercise Rendering HTML as a Response

// Command to run in terminal: 

// ----------------------------------------------------------

// 119 - URL Module Explained

// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {

//     if (req.url === '/favicon.ico') {
//         return true;
//     }
//     console.log(req.url); // console: /

//     const myURL = new URL(req.url, 'http://localhost:3000/');

//     console.log(myURL);
//     console.log(myURL.pathname);

//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     res.end('<h1>hi elkhan</h1>')
// })

// server.listen(3000);

// http://localhost:3000/product?id=1&category=pants
// / - is our home (slash after 3000/)
// 3000 - is range that goes from 0 to 65535
// product - is a path
// ? - allows you to add query string
// id - is a query string(searches server for id data)
// 1 - data(value)
// & - for a multiple query

// product?id=1&category=pants - so, this is request to
// the server to serach for this data and
// display it in your page. But in Node js
// we can use URL module (see above!!!)

// Command to run in terminal: npm run server

// ----------------------------------------------------------

// 120 - Importing NPM Modules

// Command to run in terminal: 

// ----------------------------------------------------------

