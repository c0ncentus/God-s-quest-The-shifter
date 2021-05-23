const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
if (typeof localStorage === "undefined" || localStorage === null) {
    // var LocalStorage = require('node-localstorage').LocalStorage;
    // localStorage = new LocalStorage('./scratch');
}

// localStorage.setItem('myFirstKey', 'myFirstValue');
// console.log(localStorage.getItem('myFirstKey'))
app.use(express.static(path.join(__dirname, './build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(PORT);