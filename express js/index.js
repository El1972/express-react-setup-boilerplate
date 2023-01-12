// npm run server - to run nodemon
// const express = require('express');
// const path = require('path');
// const app = express();

// const PORT = 3003;

// const createPath = (page) => {
//     return path.resolve(__dirname, 'views', `${page}.html`)
// }

// we're sending a sentence from server to a browser
// app.get('/', (req, res) => {
//     res.send('it is a good day')
// })

// here we're invoking the function 
// app.get('/', (req, res) => {
//     res.sendFile(createPath('homepage'))
// })

// app.get('/about', (req, res) => {
//     res.sendFile(createPath('about'))
// })

// VERY IMPORTANT INFORMATION!!! 1:23:17 to 1:24:04

// app.get('/about-us', (req, res) => {
//     res.redirect('about')
// })

// app.get('/contacts', (req, res) => {
//     res.sendFile(createPath('contacts'))
// })

// app.get('/posts/:id', (req, res) => {
//     res.sendFile(createPath('post'))
// })

// app.get('/posts', (req, res) => {
//     res.sendFile(createPath('posts'))
// })

// app.get('/add-post', (req, res) => {
//     res.sendFile(createPath('add-post'))
// })

// app.use((req, res) => {
//     res
//         .status(404)
//         .sendFile(createPath('error'))
// })


// app.listen(PORT, () => {
//     console.log(`Listens on port ${PORT}...`);
// })


//         ends at 1:24:49

// ------------------------------------------------------------

// app.set('view engine', 'ejs');

// const createPath = (page) => {
//     return path.resolve(__dirname, 'ejs-views', `${page}.ejs`)
// }

// // here we're invoking the function 
// app.get('/', (req, res) => {
//     res.render(createPath('homepage'))
// })

// app.get('/about', (req, res) => {
//     res.render(createPath('about'))
// })

// VERY IMPORTANT INFORMATION!!! 1:23:17 to 1:24:04

// app.get('/about-us', (req, res) => {
//     res.redirect('about')
// })

// app.get('/contacts', (req, res) => {
//     res.render(createPath('contacts'))
// })

// app.get('/posts/:id', (req, res) => {
//     res.render(createPath('post'))
// })

// app.get('/posts', (req, res) => {
//     res.render(createPath('posts'))
// })

// app.get('/add-post', (req, res) => {
//     res.render(createPath('add-post'))
// })

// app.use((req, res) => {
//     res
//         .status(404)
//         .render(createPath('error'))
// })

// app.listen(PORT, () => {
//     console.log(`Listens on port ${PORT}...`);
// })


// -----------------------------------------------------------

// absolute path - is a full path

// The Path module provides a way of working with directories 
// and file paths.

// resolve() - Resolves the specified paths into an absolute path

// The app.use() function - is used to mount the specified 
// middleware function(s) at the path which is being specified. 
// It is mostly used to set up middleware for your application.

// sendFile - server finds a file with that has an absolute path 
//                                          and send it back

// ----------------------------------------------------------------------

// Archakov

const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.urlencoded({ extended: false }))

const { createPool } = require('mysql');
const pool = createPool({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "register_login"
})


app.get('/home', (req, res) => {
    res.json({
        "talk": "opl"
    })
})


app.listen(4444, () => {
    console.log('Listens on port 4444...');
})