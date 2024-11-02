const express = require("express");
const app = express();
PORT = 8888;

// Database
require("./database/database");

// models
const Novel = require("./models/novel");

// Middlewares
app.use(express.json());

// Add a novel
app.post("/novel", async (req, res) => {
  let newNovel = new Novel(req.body);

  // // Dont work for unique isbn number
  // try {
  //   let result = await newNovel.save(newNovel);
  //   console.log(result, ">>> result");

  //   res.send("Novel added successfully");
  // } catch (err) {
  //   res.send("Error adding novel: " + err.message);
  // }

  // work for unique isbnNumber, work is in progress, (reference: https://chanwingkeihaha.medium.com/do-you-know-the-unique-option-is-not-a-validator-in-mongoose-85267fb1a085)
  Novel.init()
    .then(async () => {
      let result = await newNovel.save();
      res.send("Successfully added novel to database");
    })
    .catch((err) => {
      res.send("Error adding novel to db: " + err.message);
    });
});

// Get a novel by id or data
app.get("/novel/:id", (req, res) => {
  res.send("Get a novel data under maintenance !!");
});

// Get all novel record
app.get("/feed", (req, res) => {
  res.send("Get All Novel Record Under Maintenance");
});

// Delete a novel by id
app.delete("/novel/:id", (req, res) => {
  res.send("Delete a novel by id under maintenance");
});

// Delete a novel by name
app.delete("/novel", (req, res) => {
  res.send("Delete a novel by novel name under maintenance");
});

// Update a novel by id
app.patch("/novel/:id", async (req, res) => {
  let novelId = req?.params.id;
  let updatedData = req?.body;
  console.log(updatedData);

  try {
    let result = await Novel.findOneAndUpdate({ _id: novelId }, updatedData, {
      new: "true",
    });
    console.log(result, ">>> result");

    res.send({ message: `${novelId} Updated Successfully !!`, data: result });
  } catch (err) {
    res.send(`Error, Failed to update ${novelId}: ${err.message}`);
  }
});

// Update a novel by name
app.patch("/novel", (req, res) => {
  res.send("Update a novel by novel name under maintenance");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
