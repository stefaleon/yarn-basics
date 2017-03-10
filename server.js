const express = require('express');
const port = process.env.PORT || 3000;
let app = express();

app.get('/', (req, res) => {
    res.send('Hello yarn!');
});

app.listen(port, () => {
    console.log(`Server up on ${port}`);
});
