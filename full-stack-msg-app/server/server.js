var express = require('express');
var app = express();

var messages = [
    {test: 'some message', owner: 'Stefan'},
    {test: 'other message', owner: 'Sladjana'}
]

app.get('/', (req, res) => {
    res.json(messages);
});

app.listen(3000);