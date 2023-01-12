
// console.log(__dirname);

// console.log(__filename);

// console.log(process.env);

// console.log(`hello, ${process.argv[2]}`);

// const url = new URL('https://localhost:3000/mybellshoes')

// console.log(url.hostname);

// console.log(url.href);

// console.log(url.pathname);

// console.log(url.hash);

// const { userName: user, hi } = require('./trymodule')

// module.exports = sname (shows that we can export too)

// const os = require('os')

// console.log(os.platform(), os.release());

const fs = require('fs')

// without utf-8 & with toString()
// fs.readFile('./info.txt', (error, data) => {
//     console.log(data.toString());
// })

// with utf-8 & without toString()
// fs.readFile('./info.txt', 'utf-8', (error, data) => {
//     console.log(data);
// })

// console.log(`this will show first, then info.txt, 
// + because it works asynchronosly`);


// we're writing to a new file and adding text
// fs.readFile('./info.txt', 'utf-8', (error, data) => {

//     fs.writeFile('./infoFloyd.txt',
//         `${data}. I liked it!!!`, () => {

//         })

// })


// we're trying to create a folder a WRONG WAY!!!
// fs.readFile('./info.txt', 'utf-8', (error, data) => {

//     fs.writeFile('./myfiles/infoFloyd.txt',
//         `${data}. I liked it!!!`, () => {
//             error ? console.log(error) : null;
//         }
//     )

// })


// now we're creating a folder right way
// fs.mkdir('./myfiles', () => {

// })

//but because it runs asynchronosly it will create it
// separately first, that's why we need to do next...

// and now it will create a folder with a file in it
// fs.readFile('./info.txt', 'utf-8', (error, data) => {

//     fs.mkdir('./myfiles', () => {

//         fs.writeFile('./myfiles/infoFloyd.txt',
//             `${data}. I liked it!!!`, () => {
//                 error ? console.log(error) : null;
//             }
//         )

//     })

// })


// VERY IMPORTANT INFORMATION!!! 25:30 to 27:24


// we're deleting myfiles & infoFloyd in a 4s & 6s
// setTimeout(() => {
//     fs.unlink('./myfiles/infoFloyd.txt', () => { });
// }, 6000)

// setTimeout(() => {
//     fs.rmdir('./myfiles', () => { });
// }, 8000)


// existsSync checks if file or folder exists. It
// accepts a path as an argument 
// setTimeout(() => {
//     if (fs.existsSync('./myfiles/infoFloyd.txt')) {
//         fs.unlink('./myfiles/infoFloyd.txt', () => { });
//     }
// }, 6000)

// setTimeout(() => {
//     if (fs.existsSync('./myfiles')) {
//         fs.rmdir('./myfiles', () => { });
//     }
// }, 8000)

// we can use existsSync not only for deleting files
// and folders but also for adding files and folders

// EVENTS

// here name of the constant is uppercase which means
// it's a class. So we can create a copy of class to
// watch for events
const EventEmitter = require('events');
const emitter = new EventEmitter();


// method 'on' watches for the event. First argument
// is any name you want to give. Second is a callback
emitter.on('some_event', (text) => {
    console.log(text);
})

// next step is to call our event with a function emit()
// First argument is a name that we gave, and second is
// a text 
// Order of steps is very important: first we create an
// event itself and then we call it
emitter.emit('some_event', 'I love you')


//       ends at 32:27

