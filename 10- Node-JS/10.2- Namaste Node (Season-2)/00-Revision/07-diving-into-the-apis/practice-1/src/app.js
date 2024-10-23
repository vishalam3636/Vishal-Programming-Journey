const express = require("express");
const connectDB = require("./config/database");
const app = express();
// models imports
const Novel = require("./models/book");
const PORT = 8888;

//=========== USING MIDDLEWARES ==========//
app.use(express.json());

//============== MAKING APIS =============//
// Create Novel
app.post("/novel", (req, res) => {
  console.log(req.body);

  /*
  // Static Data Passing
    let newNovel = {
      title: "Prince Of Sword", // String is shorthand for {type: String}
      author: "K Jones",
      summary: "Story of sword",
      price: 1000,
      rating: 4,
      status: true,
      pages: 800,
      extra: "Blahhh", // if key isn't in schema then it wont be added in the document
    };

    let novel = new Novel(newNovel);
    */

  let novel = new Novel(req.body);

  try {
    novel.save(novel);
    res.send("Novel addedd successfully !!!");
  } catch (err) {
    res
      .status(400)
      .send("Novel added successfully under maintenance", err.message);
  }
});

// Find a novel by id (returns object)
app.get("/getNovelById", async (req, res) => {
  let novelId = req.body.id;

  try {
    // let novel = await Novel.findById("671706df9bf558e9557a5b50"); // static
    let novel = await Novel.findById(novelId); // dynamic
    res.send(novel);
  } catch (err) {
    res.status(400).send("Failed to get Novel by id");
  }
});

// find a novel by findOne (returns object and the first added)
app.get("/novel", async (req, res) => {
  console.log(req.body);
  try {
    // let data = await Novel.findOne({ title: "Detective Conan" }); // static
    let data = await Novel.findOne(req.body); // dynamic
    res.send(data);
  } catch (err) {
    res.status(400).send("Failed to get novel by findOne method");
  }
});

// get all novel by find method
app.get("/feed", async (req, res) => {
  try {
    // let data = await Novel.find({}); // gets all docs.
    let data = await Novel.find({ title: "Detective Conan" }); //  get all with this title
    res.send(data);
  } catch (err) {
    res.status(400).find("Failed to get novels");
  }
});

// Delete Novel (findByIdAndDelete)
app.delete("/novel", async (req, res) => {
  try {
    let deletedData = await Novel.findByIdAndDelete("6716af8f0ddd407552421336");
    res.send({ message: "Novel Deleted Successfully", novel: deletedData });
  } catch (err) {
    res.status(400).send("Failed to delete Novel");
  }
});

// Update a Novel
app.patch("/novel", async (req, res) => {
  try {
    let updatedDats = await Novel.findByIdAndUpdate(
      "6716f5d10ddd407552421338",
      {
        summary: "SStory of magic and specky graduating boy",
      }
    );
    res.send(updatedDats);
  } catch (err) {
    res.send("Update API under maintenance");
  }
});

connectDB()
  .then(() => {
    console.log("DB connected successfully !!");

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected !!");
  });
