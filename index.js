var express = require('express');
var app = express();

var userRoutes = require('./routes/user.js')

// a middleware, maybe a good way to check the JWT
app.use('/', (req, res, next) => {
  console.log("A request for things received at " + Date.now());
  next();
})

app.use('/user', userRoutes);

app.listen(3300);