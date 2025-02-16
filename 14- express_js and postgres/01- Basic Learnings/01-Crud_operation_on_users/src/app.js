require("dotenv").config(); // Load environment variables

const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Function to check and create the users table if it doesn't exist
const createUsersTable = async () => {
  const checkTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE
    );
  `;
  try {
    await pool.query(checkTableQuery);
    console.log("Users table is ready.");
  } catch (err) {
    console.error("Error creating users table:", err);
  }
};

// Call the function to check and create the table when the app starts
createUsersTable();

// Route to add a user to the database
app.post("/add-user", async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send("Name and Email are required");
  }

  try {
    // Insert the user into the PostgreSQL database
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );

    // Return the added user
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding user");
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
