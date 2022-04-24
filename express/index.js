
// 132 - Create server with express

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send(`${'<h1>Hello Jack</h1>'}`)
// })

// app.get('/about', (req, res) => {
//     res.json({
//         name: 'Elkhan'
//     })
// })

// app.listen(3000, () => {
//     console.log('Server is running at port 3000....');
// })

// Command to run in terminal: npm run server

// ----------------------------------------------------------

// 133 - Using Postman

// Command to run in terminal: npm run server

// ----------------------------------------------------------

// 134 - Using Postman

// const express = require('express');
// const app = express();

// // parse application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: false }))

// // parse application/json
// app.use(express.json())

// app.get('/', (req, res) => {
//     res.send(`${'<h1>Hello Jack</h1>'}`)
// })

// app.get('/about', (req, res) => {
//     res.json({
//         name: 'Elkhan'
//     })
// })

// app.post('/login', (req, res) => {
//     console.log(req.body);

//     res.send('User Logged In Succesfuly...')
// })

// app.listen(3000, () => {
//     console.log('Server is running at port 3000....');
// })

// Command to run in terminal: npm run server

// ----------------------------------------------------------

// 135 - Introducing Middleware



const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.protocol);
    console.log(req.get('host'));
    console.log(req.originalUrl);


    next();
})

app.get('/', (req, res) => {
    res.send(`${'<h1>Hello Jack</h1>'}`)
})

app.get('/about', (req, res) => {
    res.json({
        name: 'Elkhan'
    })
})

app.post('/login', (req, res) => {
    console.log(req.body);

    res.send('User Logged In Succesfuly...')
})

app.listen(3000, () => {
    console.log('Server is running at port 3000....');
})

// Command to run in terminal: npm run server

// ----------------------------------------------------------