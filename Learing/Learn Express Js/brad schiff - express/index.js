const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }));
// app.use(getWeather) - delete getWeather from: 
// app.get('/', getWeather, (req, res) => {
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const getWeather = (req, res, next) => {
    req.visitorWeather = true;
    if (req.visitorWeather) {   // next() - optional;
        res.send('Please comeback when it\'s not raining');
    } else {
        next()
    }
}

app.get('/', (req, res) => {
    /* res.send( `
     <form action="/result" method="POST">
         <input type="text" name="email">
         <button>Submit</button>
     </form>
     <p>${req.visitorWeather ? 'it\'s raining' : 'it\'s not '}</p>
     ` ) */
    return res.render('home', { // rendering the template (home.ejs)
        isRaining: req.visitorWeather,
        pets: [{ // can be object with any data that you want to pass
            name: 'Meowesalot',
            species: 'cat'
        }, {
            name: 'Barksalot',
            species: 'dog'
        }]
    })

})

app.post('/result', (req, res) => {
    if (req.body.email.trim().toUpperCase() === 'JOHN') {
        res.send('You\'re in')
    } else {
        res.send('You\'re out')
    }
})

app.get('/api/pets', (req, res) => {
    res.json([{
        name: 'Meowesalot',
        species: 'cat'
    }, {
        name: 'Barksalot',
        species: 'dog'
    }])
})

app.listen(3000, () => {
    console.log('Server listens on port 3000....');
})