
// 113

// function trymodule(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// // module.exports.trymodule = trymodule;
// // module.exports.sub = sub;

// module.exports = {
//     trymodule,
//     sub
// };

// ------------------------------------------------------

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

module.exports.add = add;
module.exports.sub = sub;