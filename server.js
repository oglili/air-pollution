const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const router = require('./src/routes/index')
var favicon = require('serve-favicon');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static('public'));
app.use(express.static('images'));
app.use('/', router);



app.listen(port, () => {
    console.log(`Server is now listening at port ${port}`)
});