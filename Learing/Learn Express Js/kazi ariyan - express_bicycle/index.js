
// 140 - Server Setup with Declaring all the Routes 
//with Express Part 2

// const express = require('express');
// const app = express();
// const bicycles = require('./data/data.json')

// app.get('/', (req, res) => {
//     res.send(bicycles);
// })

// app.get('/bicycle', (req, res) => {
//     const bicycle = bicycles.find((b) => {
//         return b.id === req.query.id;
//     })
//     return res.send(bicycle);
// })

// app.listen(3000, () => {
//     console.log('Server listens on port 3000....');
// })

// Command to run in terminal: npm run server

// ----------------------------------------------------------


// 141 - Rendering our First EJS Template

// const express = require('express');
// const app = express();
// const bicycles = require('./data/data.json')

// app.set('view engine', 'ejs');


// // app.get('/', (req, res) => {
// //     res.send(bicycles);
// // })

// // app.get('/bicycle', (req, res) => {
// //     const bicycle = bicycles.find((b) => {
// //         return b.id === req.query.id;
// //     })
// //     return res.send(bicycle);
// // })


// app.get('/', (req, res) => {
//     return res.render('bicycles')
// })

// app.get('/bicycle', (req, res) => {
//     const bicycle = bicycles.find((b) => {
//         return b.id === req.query.id;
//     })
//     return res.render('overview')
// })


// app.listen(3000, () => {
//     console.log('Server listens on port 3000....');
// })

// Command to run in terminal: npm run server

// ----------------------------------------------------------

// 142 - Handle Static Files

// const express = require('express');
// const app = express();
// const bicycles = require('./data/data.json')

// app.set('view engine', 'ejs');
// app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     return res.render('bicycles')
// })

// app.get('/bicycle', (req, res) => {
//     const bicycle = bicycles.find((b) => {
//         return b.id === req.query.id;
//     })
//     return res.render('overview')
// })


// app.listen(3000, () => {
//     console.log('Server listens on port 3000....');
// })

// Command to run in terminal: npm run server

// ----------------------------------------------------------

// 143 - Render dynamic data for Overview Page

const express = require('express');
const app = express();
const bicycles = require('./data/data.json')

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
    return res.render('bicycles')
})

app.get('/bicycle', (req, res) => {
    const bicycle = bicycles.find((b) => {
        return b.id === req.query.id;
    })
    console.log(bicycle);
    return res.render('overview')
})


app.listen(3000, () => {
    console.log('Server listens on port 3000....');
})

// Command to run in terminal: npm run server

// ----------------------------------------------------------