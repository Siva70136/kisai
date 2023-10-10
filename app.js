const express = require('express');
const app = express();

app.use(express.json());

// Create an initial list to store user data
const users = [
    {
        id: 123,
        name: 'prashant',
        age: 27,
    },
    {
        id: 124,
        name: 'somnath',
        age: 23,
    },
];

app.post('/user', (req, res) => {
    const { name, age } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        age,
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/list', (req, res) => {
    res.json(users);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
