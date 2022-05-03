
// 132 - Create server with express

// const express = require('express');
// const app = express();

//   O R D E R   O F   T H E   F U N C T I O N S   M A T T E R S!!!

// middleware order matters!!!

// express.urlencoded - built-in part of express. It
// looks at the body of post request and would add
// super-coniniently named properties to the:
// request(req.body) object so that is really easy
// to access the values the user submitted
// app.use(express.urlencoded({ extended: false }));

// app.use()

// req - object that represents request from the visitor
// res - object that represents response to the visitor
// app.get('/', (req, res) => {
//     res.send(`${'<h1>Hello Jack</h1>'}`)
// })

// app.get('/about', (req, res) => {
//     res.json({
//         name: 'Elkhan'
//     })
// })

//            /\  
//      these || should be above listen. Order does
//      matter

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