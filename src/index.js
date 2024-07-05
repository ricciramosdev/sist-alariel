
const express = require('express');
const morgan = require('morgan');
const database = require('./database.js');

const app = express();
app.use(morgan('dev'));
// ..

app.set('port',4000);
app.listen(app.get('port'));

console.log("conection" + app.get('port'));

app.get('./clientes', async(req, res)=>{
    const connection = await database.getConnection();
})


