// const moment  = require('moment');
// const foo  = require('./func');
// const { a }  = require('./func');
// const { a }  = require('./func');
// const a  = require('./func/');
// const os  = require('os');
const fs  = require('fs');
const http  = require('http');
const DB = './db.json'

const server = http.createServer((req, res) => {
    // console.log('connection!');
    // res.end('Hello from node server!');

    if (req.url === '/') {
        res.end('Hello from node server!');
    } else if (req.url === '/api/users') {
        if (req.method === 'GET') {
            fs.readFile(DB, 'utf-8', (err, data) => {
                if (err) res.end('Error!');
                else res.end(data);
            });
        }
    } else res.end('=(')
});

server.listen(5555);

// Old
// host/users
// host/users/131
// host/users/add
// host/users/update/123
// host/users/delete/123

// REST (CRUD)
// host/users (GET)
// host/users/131 (GET)
// host/users (POST)
// host/users/123 (PUT / PATCH)
// host/users/123 (DELETE)

// const users = [{ name: 'Vasya', age: 20 }];
//
// fs.writeFile(DB, JSON.stringify(users), 'utf-8', (err) => {
//     if (err) console.log(err);
//     else console.log('Ok!');
// });

// fs.readFile(DB, 'utf-8', (err, data) => {
//     if (err) console.log(err);
//     else {
//         // console.log(data);
//         const users = JSON.parse(data);
//         users.push({ name: 'Ann', age: 25 });
//
//         fs.writeFile(DB, JSON.stringify(users, null, 4), 'utf-8', (err) => {
//             if (err) console.log(err);
//             else console.log('Ok!');
//         });
//     }
// });

// console.log(foo.a(10));
// console.log(moment());
// console.log(a(21));
// console.log(os.cpus());
// console.log(os.platform());
// console.log(os.type());
