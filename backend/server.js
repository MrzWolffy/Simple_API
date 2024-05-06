const express = require('express');
const app = express();

let user = [];

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/', (req, res) => {
    const { action, username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    if (action === 'register') {
    if (user.find(user => user.username === username)) {
        return res.status(400).send('Username already exists');
    }
    user.push({ username, password });
    res.send('Successfully Register');
    } else if (action === 'login'){
        const users = user.find(user => user.username === username);
        if(users && users.password === password){
            res.send('Successfully logged in');
        } else {
            res.status(401).send('Invalid username or password');
        }
    }else {
        res.status(400).send('Invalid action');
    }
});


app.listen(5000, () =>{
    console.log('Server is running...');
})