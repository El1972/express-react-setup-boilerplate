<script>
113

npm init    // to create package.json

node script // <-(is the name); (in terminal) command to run code

npm i nodemon -D  // to install nodemon globaly

npm run server   // run nodemon

// ----------------------------------------------------------------

114

// node script.js 3 ADD 5 - is array based
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


</script>