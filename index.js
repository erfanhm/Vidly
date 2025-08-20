const Joi = require("joi"); // Importing Joi for validation
const genres=require('./routes/genres');
const express = require("express"); // Importing Express framework
const app = express(); // Creating an instance of Express application

app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api/genres', genres)
//POST for having a server
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});