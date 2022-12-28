

const express = require('express');
const port = 3000;
const app = express();
const bodyparser = require('body-parser');

app.get('/', (req, res) => {
    res.send('iniciado correctamente');
});
app.get('/api', (req, res) => {
    res.send('api correct');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});