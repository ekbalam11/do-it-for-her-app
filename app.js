const express = require('express');

const indexRoutes = require('./routes/indexRoutes')

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

//routes
app.use('/', indexRoutes);


//server config
const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(`Server is listening correctly in port: ${PORT}`)
})