const express = require('express');


// Create express app
const app = express();

//listen on port request
app.listen(5000, () => { 
    console.log('Server started on http://localhost:5000');
});