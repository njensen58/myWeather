const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3058;


app.use(bodyParser.json());
app.use(morgan('dev'));



app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT} 3058`)
});
