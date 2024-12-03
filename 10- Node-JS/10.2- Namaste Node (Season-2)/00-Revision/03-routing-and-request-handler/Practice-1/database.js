const { MongoClient, ObjectId } = require("mongodb");

// Connection URL
const url =
  "mongodb+srv://namastedevpracticeproj:JHXZcF8ujGIdKS2A@namastenodepractice.usrgd.mongodb.net/";

const client = new MongoClient(url);

// Database Name
const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // the following code examples can be pasted here...
  // //   Insert Data
  // const data = {
  //   firstName: "Katrina",
  //   lastName: "Kaif",
  //   city: "Mumbai",
  //   phoneNumber: "65467546564",
  // };

  // const insertResult = await collection.insertMany([data]);
  // console.log("Inserted documents =>", insertResult);

  // Update data
  const updateResult = await collection.updateOne(
    { _id: new ObjectId("66f904bf557238c9ad504d64") },
    { $set: { firstName: "Wishall" } }
  );
  console.log("Updated documents =>", updateResult);

  // Read the document
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
