const express = require("express");

// Frontend bhi likhna tha to aise kr rhe hain
// Isi method mein server bhi likhenge aur consume bhi karenge yahi pe
// Is Architecture mein backend aur frontend saath likh skte hain
function block_1_basicServer() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json()); // middleware instructing ki json ko samajh jana

    //=================== API ENDPOINTS ================//
    //======== GET Methods ========//
    /* 
        => get "/menu" route pe ek handler register karega (second param i.e; the callback is called as handler)
        => res.json() ka do kaam hai- 
            👉🏼 Contet-Type ko application/json mein set karna aur 
            👉🏼 Response send karna, serialised kar ke response send karta hai. Figure out Serialisation and Deserialisation
    */

    app.get("/menu", (req, res) => {
      res.json({ items: ["Thali", "Biryani", "Roti"] });
    });

    // query params (? ke aage query param lagta hai)
    app.get("/search", (req, res) => {
      const { q, limit } = req.query;

      res.json({
        query: q,
        limit: limit || 0,
      });
    });

    // route params or path params (/: ke aage lagta hai)
    app.get("/menu/:id", (req, res) => {
      const { id } = req.params;
      res.json({
        item: id,
        price: 149,
      });
    });

    //===== POST methods =========//
    /*
        => POST method mein data aata hai
        => majorly body se aata hai
    */
    app.post("/order", (req, res) => {
      const order = req.body;
      res.status(201).json({
        status: "created",
        order: order,
      });
    });

    // Creating server below
    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      // Writing frontend below
      try {
        const menuRes = await fetch(`${base}/menu`);
        const menuData = await menuRes.json();
        console.log("GET /menu", JSON.stringify(menuData));

        console.log("+++++++++++++++++++++++");

        const searchRes = await fetch(`${base}/search?q=biryani&limit=5`);
        const searchData = await searchRes.json();
        console.log("GET /Search", JSON.stringify(searchData));

        console.log("+++++++++++++++++++++++");

        const menuItemRes = await fetch(`${base}/menu/42`);
        const menuItemData = await menuItemRes.json();
        console.log("GET /menu", JSON.stringify(menuItemData));

        console.log("+++++++++++++++++++++++");

        const orderRes = await fetch(`${base}/order`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            dish: "biryani",
            quantity: 2,
          }),
        });
        const orderData = await orderRes.json();
        console.log("POST /order", JSON.stringify(orderData));

        console.log("+++++++++++++++++++++++");
      } catch (err) {
        console.log(err);
      }

      server.close(() => {
        console.log("Blog 1 served......");
        resolve({ message: "Servvveeddd" });
      });
    });
  });
}

//==== handling responses ========//
// KUCH FRONTEND HANDLING pending hai
function block_2_response() {
  return new Promise((resolve) => {
    const app = express();

    app.get("/text", (req, res) => {
      res.send(JSON.stringify("Hello from chai code"));
    });

    app.get("/json", (req, res) => {
      res.json({
        frameWord: "Express",
        version: "^5.2.1",
      });
    });

    app.get("/not-found", (req, res) => {
      res.status(404).json({
        error: "Page not found",
      });
    });

    app.get("/health", (req, res) => {
      res.sendStatus(200);
    });

    app.get("/old-menu", (req, res) => {
      // add entry in db to see how many users are still visiting the old route
      res.redirect(301, "/new-menu");
    });

    app.get("/xml", (req, res) => {
      res.type("application/xml").send("<dish><name>Biryani</name></dish>");
    });

    app.get("/custom-headers", (req, res) => {
      res.set("X-Request-By", "Chai Aur Code");
      res.set("X-Request-Id", "12345");
      res.json({
        message: "Custom headers set",
      });
    });

    app.get("/no-content", (req, res) => {
      res.status(204).end();
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      try {
        // TODO:
        const textRes = await fetch(`${base}/text`);
        const textData = await textRes.json();
        console.log("GET /text", JSON.stringify(textData));

        console.log("+++++++++++++++++++++++");

        const jsonRes = await fetch(`${base}/json`);
        const jsonData = await jsonRes.json();
        console.log("GET /json", JSON.stringify(jsonData));

        console.log("+++++++++++++++++++++++");

        const notFoundRes = await fetch(`${base}/not-found`);
        const notFoundData = await notFoundRes.json();
        console.log("GET /not-found", JSON.stringify(notFoundData));

        console.log("+++++++++++++++++++++++");

        const healthRes = await fetch(`${base}/health`);
        const healthData = await healthRes.json();
        console.log("GET /health", JSON.stringify(healthData));

        console.log("+++++++++++++++++++++++");
      } catch (err) {
        console.log(err);
      }

      server.close(() => {
        console.log("Blog 2 served......");
        resolve({ message: "Servvveeddd blog 2" });
      });
    });
  });
}

async function main() {
  let basicServer = await block_1_basicServer();
  console.log(basicServer, ">>>basicServer");

  await block_2_response();

  process.exit(0); // assignment: ye line of code kya karta hai ?
}

// block_1_basicServer().then((res) => console.log(res, ">>>res"));

main();
