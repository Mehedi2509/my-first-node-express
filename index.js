const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
const port = 2000;

app.get('/', (req, res) => {
    res.send('Hello World! today im very happy,because today starting node js. Now upcoming 10 days learning node js')
});

const users = [
    { id: 0, name: 'Akash', location: 'Dhaka', age: '34', work: 'farniture' },
    { id: 1, name: 'Abul', location: 'Dhaka', age: '34', work: 'farniture' },
    { id: 2, name: 'Asraful', location: 'Dhaka', age: '34', work: 'farniture' },
    { id: 3, name: 'Ashik', location: 'Dhaka', age: '34', work: 'farniture' },
    { id: 4, name: 'Abdulla', location: 'Dhaka', age: '34', work: 'farniture' },
    { id: 5, name: 'Abu Kasem', location: 'Dhaka', age: '34', work: 'farniture' },
    { id: 6, name: 'Ajmol', location: 'Dhaka', age: '34', work: 'farniture' },
    { id: 7, name: 'Abir', location: 'Danmondi', age: '34', work: 'farniture' },
    { id: 8, name: 'Batash', location: 'Dolesshori', age: '34', work: 'farniture' },
];

// quary search
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchUser = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchUser);
    }
    else {
        res.send(users);
    }
})

// dynamic search
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

// app.post
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

app.listen(port, () => {
    console.log('listen', port)
})