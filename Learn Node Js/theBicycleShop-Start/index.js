
// 123 - Folder Structure and Create HTTP Server

// const http = require('http');

// const server = http.createServer((req, res) => {

//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.end('<h1>Elkhan</>')

// })

// server.listen(3000);

// Command to run in terminal: npm run server

// ----------------------------------------------------------

// 124 - Parsing URL and Query String

// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {

//     // write path after: 'http://localhost:3000/'
//     // and you'll see it in console

//     // to avoid favicon.ico
//     if (req.url === '/favicon.ico') {
//         return true;
//     }

//     console.log(req.headers);

//     console.log(req.url);
//     const myurl = new URL(req.url, `http://${req.headers.host}`)
//     const pathname = myurl.pathname;
//     const id = myurl.searchParams.get('id')
//     console.log(pathname, id);



//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.end('<h1>Elkhan</>')
// })

// server.listen(3000);

// Command to run in terminal: npm run server

// ----------------------------------------------------------

// 125 - Declaring Routes and Rendering HTML

// const http = require('http');
// const url = require('url');
// const fs = require('fs').promises;

// const server = http.createServer(async (req, res) => {

//     if (req.url === '/favicon.ico') {
//         return true;
//     }

//     console.log(req.headers);

//     console.log(req.url);
//     const myurl = new URL(req.url, `http://${req.headers.host}`)
//     const pathname = myurl.pathname;
//     const id = myurl.searchParams.get('id')
//     console.log(pathname, id);

//     if (pathname === '/') {

//         const html = await fs.readFile('./view/bicycles.html', 'utf-8')
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.end(html);

//     } else if (pathname === '/bicycle' && id >= 0 && id <= 5) {

//         const html = await fs.readFile('./view/overview.html', 'utf-8')
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.end(html);

//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.end('File Not Found')
//     }

// })

// server.listen(3000);


// Command to run in terminal: npm run server

// ----------------------------------------------------------

// 126 - Rendering CSS, Images, SVG Files

// const http = require('http');
// const url = require('url');
// const fs = require('fs').promises;

// const server = http.createServer(async (req, res) => {

//     if (req.url === '/favicon.ico') {
//         return true;
//     }

//     console.log(req.headers);

//     console.log(req.url);
//     const myurl = new URL(req.url, `http://${req.headers.host}`)
//     const pathname = myurl.pathname;
//     const id = myurl.searchParams.get('id')
//     console.log(pathname, id);

//     if (pathname === '/') {

//         const html = await fs.readFile('./view/bicycles.html', 'utf-8')
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.end(html);

//     } else if (pathname === '/bicycle' && id >= 0 && id <= 5) {

//         const html = await fs.readFile('./view/overview.html', 'utf-8')
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.end(html);

//     } else if (/\.(png)$/i.test(req.url)) {
//         const image = await
//             fs.readFile(`./public/image/${req.url.slice(1)}`)
//         res.writeHead(200, { 'Content-Type': 'image/png' })
//         res.end(image);

//     } else if (/\.(css)$/i.test(req.url)) {
//         const css = await
//             fs.readFile(`./public/css/index.css`)
//         res.writeHead(200, { 'Content-Type': 'text/css' })
//         res.end(css);

//     } else if (/\.(svg)$/i.test(req.url)) {
//         const svg = await
//             fs.readFile(`./public/image/icons.svg`)
//         res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
//         res.end(svg);

//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.end('File Not Found')
//     }

// })

// server.listen(3000);

// Command to run in terminal: npm run server

// ----------------------------------------------------------

// 127 - Rendering Dynamic Data for Overview Page

// const http = require('http');
// const url = require('url');
// const fs = require('fs').promises;
// const bicycles = require('./data/data.json');

// const server = http.createServer(async (req, res) => {

//     if (req.url === '/favicon.ico') {
//         return true;
//     }

//     console.log(req.headers);

//     console.log(req.url);
//     const myurl = new URL(req.url, `http://${req.headers.host}`)
//     const pathname = myurl.pathname;
//     const id = myurl.searchParams.get('id')
//     console.log(pathname, id);

//     if (pathname === '/') {

//         const html = await fs.readFile('./view/bicycles.html', 'utf-8')
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.end(html);

//     } else if (pathname === '/bicycle' && id >= 0 && id <= 5) {

//         let html = await fs.readFile('./view/overview.html', 'utf-8')

//         const bicycle = bicycles.find((b) => {
//             return b.id === id;
//         })

//         html = html.replace(/<%IMAGE%>/g, bicycle.image);
//         html = html.replace(/<%NAME%>/g, bicycle.name);

//         let price = bicycle.originalPrice;
//         if (bicycle.hasDiscount) {
//             price = (price * (100 - bicycle.discount)) / 100
//         }

//         html = html.replace(/<%NEWPRICE%>/g, `$${price}`);

//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.end(html);

//     } else if (/\.(png)$/i.test(req.url)) {
//         const image = await
//             fs.readFile(`./public/image/${req.url.slice(1)}`)
//         res.writeHead(200, { 'Content-Type': 'image/png' })
//         res.end(image);

//     } else if (/\.(css)$/i.test(req.url)) {
//         const css = await
//             fs.readFile(`./public/css/index.css`)
//         res.writeHead(200, { 'Content-Type': 'text/css' })
//         res.end(css);

//     } else if (/\.(svg)$/i.test(req.url)) {
//         const svg = await
//             fs.readFile(`./public/image/icons.svg`)
//         res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
//         res.end(svg);

//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.end('File Not Found')
//     }

// })

// server.listen(3000);

// Command to run in terminal: npm run server

// ----------------------------------------------------------

// 128 - Create Dynamic blocks in Homepage

// const http = require('http');
// const url = require('url');
// const fs = require('fs').promises;
// const bicycles = require('./data/data.json');

// const server = http.createServer(async (req, res) => {

//     if (req.url === '/favicon.ico') {
//         return true;
//     }

//     console.log(req.headers);

//     console.log(req.url);
//     const myurl = new URL(req.url, `http://${req.headers.host}`)
//     const pathname = myurl.pathname;
//     const id = myurl.searchParams.get('id')
//     console.log(pathname, id);

//     if (pathname === '/') {

//         let html = await fs.readFile('./view/bicycles.html', 'utf-8')
//         const ALLMainBicycles = await fs.readFile('./view/main/bmain.html', 'utf-8')

//         let allTheBicycles = '';

//         for (let index = 0; index < 6; index++) {
//             allTheBicycles += ALLMainBicycles;
//         }

//         html = html.replace(/<%ALLMainBicycles%>/g, allTheBicycles);

//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.end(html);

//     } else if (pathname === '/bicycle' && id >= 0 && id <= 5) {

//         let html = await fs.readFile('./view/overview.html', 'utf-8')

//         const bicycle = bicycles.find((b) => {
//             return b.id === id;
//         })

//         html = html.replace(/<%IMAGE%>/g, bicycle.image);
//         html = html.replace(/<%NAME%>/g, bicycle.name);

//         let price = bicycle.originalPrice;
//         if (bicycle.hasDiscount) {
//             price = (price * (100 - bicycle.discount)) / 100
//         }

//         html = html.replace(/<%NEWPRICE%>/g, `$${price}`);

//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.end(html);

//     } else if (/\.(png)$/i.test(req.url)) {
//         const image = await
//             fs.readFile(`./public/image/${req.url.slice(1)}`)
//         res.writeHead(200, { 'Content-Type': 'image/png' })
//         res.end(image);

//     } else if (/\.(css)$/i.test(req.url)) {
//         const css = await
//             fs.readFile(`./public/css/index.css`)
//         res.writeHead(200, { 'Content-Type': 'text/css' })
//         res.end(css);

//     } else if (/\.(svg)$/i.test(req.url)) {
//         const svg = await
//             fs.readFile(`./public/image/icons.svg`)
//         res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
//         res.end(svg);

//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.end('File Not Found')
//     }

// })

// server.listen(3000);

// Command to run in terminal: npm run server

// ----------------------------------------------------------

// 129 - Rendering Dynamic Data for Homepage Part 1

// const http = require('http');
// const url = require('url');
// const fs = require('fs').promises;
// const bicycles = require('./data/data.json');

// const server = http.createServer(async (req, res) => {

//     if (req.url === '/favicon.ico') {
//         return true;
//     }

//     console.log(req.headers);

//     console.log(req.url);
//     const myurl = new URL(req.url, `http://${req.headers.host}`)
//     const pathname = myurl.pathname;
//     const id = myurl.searchParams.get('id')
//     console.log(pathname, id);

//     if (pathname === '/') {

//         let html = await fs.readFile('./view/bicycles.html', 'utf-8')
//         const ALLMainBicycles = await fs.readFile('./view/main/bmain.html', 'utf-8')

//         let allTheBicycles = '';

//         for (let index = 0; index < 6; index++) {
//             allTheBicycles += replaceTemplate(ALLMainBicycles, bicycles[index]);
//         }

//         html = html.replace(/<%ALLMainBicycles%>/g, allTheBicycles);

//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.end(html);

//     } else if (pathname === '/bicycle' && id >= 0 && id <= 5) {

//         let html = await fs.readFile('./view/overview.html', 'utf-8')

//         const bicycle = bicycles.find((b) => {
//             return b.id === id;
//         })

//         html = replaceTemplate(html, bicycle);

//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.end(html);

//     } else if (/\.(png)$/i.test(req.url)) {
//         const image = await
//             fs.readFile(`./public/image/${req.url.slice(1)}`)
//         res.writeHead(200, { 'Content-Type': 'image/png' })
//         res.end(image);

//     } else if (/\.(css)$/i.test(req.url)) {
//         const css = await
//             fs.readFile(`./public/css/index.css`)
//         res.writeHead(200, { 'Content-Type': 'text/css' })
//         res.end(css);

//     } else if (/\.(svg)$/i.test(req.url)) {
//         const svg = await
//             fs.readFile(`./public/image/icons.svg`)
//         res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
//         res.end(svg);

//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.end('File Not Found')
//     }

// })

// server.listen(3000);

// function replaceTemplate(html, bicycle) {

//     html = html.replace(/<%IMAGE%>/g, bicycle.image);
//     html = html.replace(/<%NAME%>/g, bicycle.name);

//     let price = bicycle.originalPrice;
//     if (bicycle.hasDiscount) {
//         price = (price * (100 - bicycle.discount)) / 100
//     }

//     html = html.replace(/<%NEWPRICE%>/g, `$${price}.00`);
//     html = html.replace(/<%OLDPRICE%>/g, `$${bicycle.originalPrice}`);

//     return html;

// }

// Command to run in terminal: npm run server

// ----------------------------------------------------------

// 130 - Rendering Dynamic Data for Homepage Part 2

const http = require('http');
const url = require('url');
const fs = require('fs').promises;
const bicycles = require('./data/data.json');

const server = http.createServer(async (req, res) => {

    if (req.url === '/favicon.ico') {
        return true;
    }

    console.log(req.headers);

    console.log(req.url);
    const myurl = new URL(req.url, `http://${req.headers.host}`)
    const pathname = myurl.pathname;
    const id = myurl.searchParams.get('id')
    console.log(pathname, id);

    if (pathname === '/') {

        let html = await fs.readFile('./view/bicycles.html', 'utf-8')
        const ALLMainBicycles = await fs.readFile('./view/main/bmain.html', 'utf-8')

        let allTheBicycles = '';

        for (let index = 0; index < 6; index++) {
            allTheBicycles += replaceTemplate(ALLMainBicycles, bicycles[index]);
        }

        html = html.replace(/<%ALLMainBicycles%>/g, allTheBicycles);

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(html);

    } else if (pathname === '/bicycle' && id >= 0 && id <= 5) {

        let html = await fs.readFile('./view/overview.html', 'utf-8')

        const bicycle = bicycles.find((b) => {
            return b.id === id;
        })

        html = replaceTemplate(html, bicycle);

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(html);

    } else if (/\.(png)$/i.test(req.url)) {
        const image = await
            fs.readFile(`./public/image/${req.url.slice(1)}`)
        res.writeHead(200, { 'Content-Type': 'image/png' })
        res.end(image);

    } else if (/\.(css)$/i.test(req.url)) {
        const css = await
            fs.readFile(`./public/css/index.css`)
        res.writeHead(200, { 'Content-Type': 'text/css' })
        res.end(css);

    } else if (/\.(svg)$/i.test(req.url)) {
        const svg = await
            fs.readFile(`./public/image/icons.svg`)
        res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
        res.end(svg);

    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('File Not Found')
    }

})

server.listen(3000);

function replaceTemplate(html, bicycle) {

    html = html.replace(/<%IMAGE%>/g, bicycle.image);
    html = html.replace(/<%NAME%>/g, bicycle.name);

    let price = bicycle.originalPrice;
    if (bicycle.hasDiscount) {
        price = (price * (100 - bicycle.discount)) / 100
    }

    html = html.replace(/<%NEWPRICE%>/g, `$${price}.00`);
    html = html.replace(/<%OLDPRICE%>/g, `$${bicycle.originalPrice}`);
    html = html.replace(/<%ID%>/g, bicycle.id);

    if (bicycle.hasDiscount) {
        html = html.replace(/<%DISCOUNTRATE%>/g, `<div 
        class="discount__rate"><p>${bicycle.discount}% Off</p></div>`);
    } else {
        html = html.replace(/<%DISCOUNTRATE%>/g, ``);
    }


    for (let index = 0; index < bicycle.star; index++) {
        html = html.replace(/<%STAR%>/, 'checked');
    }
    html = html.replace(/<%STAR%>/g, '');


    return html;

}

// Command to run in terminal: npm run server

// ----------------------------------------------------------