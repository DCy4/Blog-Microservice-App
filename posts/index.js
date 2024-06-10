const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
//empty obj for storage, change to db storage later
const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

//expect obj with property title 
app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;
    
    posts[id] = {
        id,title
    };
    //201 = resource created
    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
    console.log('lsitening on port 4000...');
});