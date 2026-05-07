const express = require("express");

async function block_1_basicServer() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json);

    //=============== GET ROUTE ===============//
    app.get("/menu", (req, res) => {
      res.json({
        items: ["Thali", "Biryani", "Roti"],
      });
    });

    // Query Param
    app.get("/search", (req, res) => {
      const { q, limit } = req.query;
      res.json({
        query: q,
        limit: limit || "10",
      });
    });

    // Route Param or Path Param
    app.get("/menu/:id", (req, res) => {
      const { id } = req.params;
      res.json({
        id: id,
        price: 149,
      });
    });

    //============== POST ROUTE =================//
    app.post("/order", (req, res) => {
      const order = req.body;
      res.status(201).json({
        status: "created",
        order,
      });
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      try {
        const menuRes = await fetch(`${base}/menu`);
        const menuData = await menuRes.json();
        console.log("GET /menu", JSON.stringify(menuData));

        console.log("+++++++++++++++++++++++++");

        const searchRes = await fetch(`${base}/search?q=biryani&limit=5`);
        const searchData = await searchRes.json();
        console.log("GET /search", JSON.stringify(searchData));

        console.log("+++++++++++++++++++++++++");

        const menuItemRes = await fetch(`${base}/menu/42`);
        const menuItemData = await menuItemRes.json();
        console.log("POST /menu", JSON.stringify(menuItemData));

        console.log("+++++++++++++++++++++++++");

        const orderRes = await fetch(`${base}/order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dish: "Biryani",
            quantity: 2,
          }),
        });
        const orderData = await orderRes.json();
        console.log("POST /order", JSON.stringify(orderData));

        console.log("+++++++++++++++++++++++++");
      } catch (error) {
        console.log(error);
      }
      //   finally {
      //     server.close(() => {
      //       console.log("BLOG 1 SERVED......");
      //       resolve();
      //     });
      //   }
    });

    // console.log(server, ">>>Server");

    server.close(() => {
      console.log("BLOG 1 SERVED......");
      resolve();
    });
  });
}

async function main() {
  await block_1_basicServer();

  process.exit(0);
}

main();
