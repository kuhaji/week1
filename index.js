'use strict';
const express = require('express');
const index = express();
const port = 3000;
index.set('view engine', 'pug');

index.use(express.static('public'));

index.get('/', (req, res) => {
    res.render('index');
});

index.get('/catinfo', (req, res) => {
    const cat = {
        'name': 'Frank',
        'age': 6,
        'weight': 5,
    };
    res.json(cat);
});

index.listen(port, () =>  {
    console.log(`Example app listening at http://localhost:${port}`);
});