const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database/db");

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// Create A User
app.post("/user", async (req, res) => {
  try {
    const { first_name, last_name, gender, mobile, email } = req.body;
    console.log(req.body);

    const newUser = await pool.query(
      `INSERT INTO users (first_name, last_name, gender, mobile, email) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [first_name, last_name, gender, mobile, email]
    );
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.send(err.message);
  }
});

// Get All User
app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query(`SELECT * FROM users`);
    res.json(allUsers.rows);
  } catch (err) {
    res.send(err.message);
  }
});

// Get a User
app.get("/users/:id", async (req, res) => {
  try {
    let userId = req.params.id;
    let user = await pool.query(`SELECT * FROM users WHERE user_id=${userId}`);
    res.json(user.rows[0]);
  } catch (err) {
    res.send(err.message);
  }
});

// Update a User
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, gender, mobile } = req.body;

    let allUpdateFields = [];
    let values = [];
    let valueIndex = 1; // Start the placeholder numbering from $1

    // Add fields to update dynamically
    if (first_name) {
      allUpdateFields.push(`first_name = $${valueIndex}`);
      values.push(first_name);
      valueIndex++;
    }
    if (last_name) {
      allUpdateFields.push(`last_name = $${valueIndex}`);
      values.push(last_name);
      valueIndex++;
    }
    if (gender) {
      allUpdateFields.push(`gender = $${valueIndex}`);
      values.push(gender);
      valueIndex++;
    }
    if (mobile) {
      allUpdateFields.push(`mobile = $${valueIndex}`);
      values.push(mobile);
      valueIndex++;
    }

    // If no fields are provided, return an error
    if (allUpdateFields.length === 0) {
      return res.status(400).send("No fields to update.");
    }

    // Add the ID to the values array for the WHERE clause
    values.push(id);

    // Construct the update query with placeholders
    const updateQuery = `
        UPDATE users
        SET ${allUpdateFields.join(", ")}
        WHERE user_id = $${valueIndex}
        RETURNING *;
      `;

    console.log("Generated Query:", updateQuery); // Debugging

    // Execute the query
    const result = await pool.query(updateQuery, values);

    // Return the updated user
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete a User{
app.delete("/users/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const deleteUser = await pool.query(
      `DELETE FROM users WHERE user_id=${id} RETURNING *`
    );

    res.json(deleteUser.rows[0]);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(5000, () => {
  console.log(`Server is listening on PORT 5000`);
});
