const express = require('express');
const app = express();

app.listen(3000)

app.get('/:id', (req, res) => {
    res.send(`Hello World ${req.params.id}`);
    }
);
