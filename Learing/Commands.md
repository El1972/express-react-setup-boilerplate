<script>
113

npm init    // to create package.json

node script // <- (is the name); (in terminal) command to run code

npm i nodemon -D  // to install nodemon globaly
npx nodemon index.js (/* or whatever name of the particular file is */)

npm run server   // run nodemon (this works!!!)

npm install jsonwebtoken

MERN

npm run dev - // for index.js in express js folder

npm start - // for App.js in react-frontend folder

// ----------------------------------------------------------------

//              Connecting To PhpMyadmin database

// Must install mysql in terminal first: 

npm install mysql

const { createPool } = require('mysql');
const pool = createPool({
host: "localhost",
port: 8889,
user: "root",
password: "root",
database: "react_fetch"
})
app.get('/', (req, res) => {
let sql = 'SELECT * FROM men_shoes';
let query = pool.query(sql, (err, results) => {
if (err) throw err;
console.log(results);
res.send('Shoes fetched...')
})
})


// Create table

CREATE TABLE publications (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    date VARCHAR(255),
    short_content VARCHAR(255),
    content VARCHAR(255),
    author_name VARCHAR(255),
    preview VARCHAR(255),
    type VARCHAR(255),
    PRIMARY KEY(id)
); 
// ----------------------------------------------------------------

114

// node      script.js      3     ADD     5 - is array based
// [0]-node [1]-script.js [2]-3 [3]-ADD [4]-5

const a = parseInt(process.argv[2]); // - reads & gets from console

// -----------------------------------------------------------------

//                              Express

// -----------------------------------------------------------------


// 132 - Create a simple server with Express.js

npm i express   // to install express

// -----------------------------------------------------------------

// 135 - Introducing Middleware

// use - is a middleware

// next - means: go to the next middleware

// -----------------------------------------------------------------

// 136 - Exercise: Create a Custom Logger

method   //http
protocol   // /login
get('host')  //GET
originalUrl  //localhost:3000

// -----------------------------------------------------------------

// 140 - Server Setup with Declaring all the Routes 
                        //with Express Part 2

    req.query.id   // to get id                    

// -----------------------------------------------------------------

// 141 - Rendering our First EJS Template

app.set('view engine', 'ejs');   // to set ejs

render()   // to handle ejs


// -----------------------------------------------------------------

// 142 - Handle Static Files

app.use(express.static('./public'));    // to access public folder

// -----------------------------------------------------------------

res.sendStatus(500)
res.sendFile()
res.render(createPath('post'))
res.redirect('about')
app.use(express.static('./public'));    // to access public folder

// -----------------------------------------------------------------

app.post('/auth/login', (req, res) => {
    console.log(req.body);

    const token = jwt.sign({
        email: req.body.email,
        firstName: 'Elkhan Hamet'
    }, 'secret123');

    res.json({
        success: true,
        token
    })
})

</script>