const Joi = require("joi"); // Importing Joi for validation
const express = require("express"); // Importing Express framework
const router = express.Router; // Creating an instance of Express application
// Array of genres with id and name name
genres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Comedy" },
    { id: 3, name: "Drama" },
    { id: 4, name: "Horror" },
    { id: 5, name: "Sci-Fi" },
    { id: 6, name: "Fantasy" },
    { id: 7, name: "Thriller" },
    { id: 8, name: "Romance" },
    { id: 9, name: "Documentary" },
    { id: 10, name: "Animation" },
    { id: 11, name: "Adventure" },
    { id: 12, name: "Mystery" },
    { id: 13, name: "Western" },
    { id: 14, name: "Crime" },
    { id: 15, name: "Biography" },
    { id: 16, name: "History" },
    { id: 17, name: "Musical" },
    { id: 18, name: "War" },
    { id: 19, name: "Sport" },
    { id: 20, name: "Family" },
    { id: 21, name: "Short" },
    { id: 22, name: "Noir" },
    { id: 23, name: "Experimental" },
    { id: 24, name: "Superhero" },
    { id: 25, name: "Historical Fiction" },
  ];
//GET for sending all genres on the server
router.get("/", (req, res) => {
    res.send(genres);
  });
//GET for getting all genres
router.get("/:id", (req, res) => {
    const name = genres.find((g) => g.id === parseInt(req.params.id));
    if (!name)
      return res.status(404).send("The name with the given ID was not found!");
  });
//POST for adding a new name
router.post("/", (req, res) => {
    const { error } = validatename(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    const name = {
      id: genres.length + 1,
      name: req.body.name,
    };
    genres.push(name);
    res.send(name);
  });
//PUT for updating a name
router.put("/:id", (req, res) => {
    const genre = genres.find((g) => g.id === parseInt(req.params.id));
    if (!genre) {
      return res.status(404).send("The name with the given ID was not found!");
    }
    const { error } = validatename(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    genre.name = req.body.name;
    res.send(genre);
  });
//DELETE for deleting a name
router.delete("/:id", (req, res) => {
    const name = genres.find((g) => g.id === parseInt(req.params.id));
    if (!name) {
      return res.status(404).send("The name with the given ID was not found!");
    }
    const index = genres.indexOf(name);
    genres.splice(index, 1);
    res.send(name);
  });
//FUNCTION for having a shorter code for validating genres
function validatename(name) {
    const schema = {
      name: Joi.string().min(3).required(),
    };
    return Joi.validate(name, schema);
  }
module.exports=router;