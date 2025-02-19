//Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'comments.json');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    fs.readFile(commentsPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading comments file');
            return;
        }
        res.send(data);
    });
});

app.post('/comments', (req, res) => {
    fs.readFile(commentsPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading comments file');
            return;
        }
        const comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile(commentsPath, JSON.stringify(comments, null, 4), (err) => {
            if (err) {
                res.status(500).send('Error writing comments file');
                return;
            }
            res.send('Comment added');
        });
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

//Run the server
//Open Postman
//Send a GET request to localhost:3000/comments
//Send a POST request to localhost:3000/comments with a JSON body
//Send a GET request to localhost:3000/comments to see the new comment