const express = require('express');
const app = express();

//Config
require('dotenv').config();
const PORT = process.env.PORT;
console.log(PORT);

//Routes
app.get('/', (req, res) => {
    res.send('Hello Bread');
});

//Bread Routes
app.use('/breads', require('./Controllers/breads_controller'));

//Listen
app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`)
});