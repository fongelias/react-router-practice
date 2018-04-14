
const express = require('express');

const port = process.env.PORT || 3000;

const app = express().use(express.static('public'));

const server = app.listen(port);


console.log('listening on port ' + port);









