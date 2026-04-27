const express = require("express");

function block_1_httpMethods() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    // Dummy database
    const routes = {
      1: {
        id: 1,
        name: "Dadar Andheri Express",
        direction: "North",
      },
      2: {
        id: 2,
        name: "Bandra-Kurla Shuttle",
        direction: "East",
      },
    };

    // database hume unique-id deta hai, yaha database nahi hai to aise global varialble se unique id bnayenge
    let nextId = 3;

    // List all train
    app.get("/routes", (req, res) => {
      res.json(Object.values(routes));
    });

    // train name options
    app.get("/trainsOptions", (req, res) => {
      let trainDetails = Object.values(routes);
      let trainOptions = trainDetails.map((obj) => {
        const { name } = obj;
        return name;
      });
      res.json(trainOptions);
    });

    // single route by id
    app.get("/routes/:id", (req, res) => {
      const { id } = req.params;
      const allTrains = Object.values(routes);
      const findTrain = allTrains.find((obj) => obj.id == id);
      if (!findTrain) {
        res.status(404).json({ message: "Train not found" });
      } else {
        res.json(findTrain);
      }
    });

    // add new route
    app.post("/routes", (req, res) => {
      // no validation , no zod
      const newRoute = { id: nextId++, ...req.body };
      routes[newRoute.id] = newRoute;
      res.status(201).json(routes);
    });

    // update the route
    app.put("/routes/:id", (req, res) => {
      const { id } = req.params;
      if (!routes[id]) return res.status(404).json({ err: "no data found" });
      routes[id] = { id: Number(id), ...req.body };
      res.status(201).json(routes);
    });

    // patch the route
    app.patch("/routes/:id", (req, res) => {
      const { id } = req.params;
      if (!routes[id]) return res.status(404).json({ err: "no data found" });
      // TODO Complete this route
      const existingData = routes[id];
      const updatedData = { ...existingData, ...req.body };
      routes[id] = updatedData;
      res.json(routes);
    });

    // Delete Route
    app.delete("/routes/:id", (req, res) => {
      const { id } = req.params;
      if (!id) return res.status(404).json({ err: "Route not found" });
      delete routes.id;
      res.json({ routes, message: "Route deleted successfully" });
    });

    // Creating server below
    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      try {
        const routesList = await fetch(`${base}/routes`);
        const routeListData = await routesList.json();
        console.log(">>>> routeListData", routeListData);

        console.log("*****************************");

        const trainOptions = await fetch(`${base}/trainsOptions`);
        const trainOptionList = await trainOptions.json();
        console.log(">>> train option list", trainOptionList);

        console.log("*****************************");

        const getTrainById = await fetch(`${base}/routes/4`);
        const getTrainDetail = await getTrainById.json();
        console.log(">>> get train by id", getTrainDetail);

        console.log("*****************************");

        const addNewRoute = await fetch(`${base}/routes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Viral Fast Local",
            direction: "West",
          }),
        });
        const addNewRouteData = await addNewRoute.json();
        console.log(">>>add new route", addNewRouteData);

        console.log("*****************************");

        const putRute = await fetch(`${base}/routes/2`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 2,
            name: "Vishal Fast Train",
            direction: "South",
          }),
        });
        const putRouteData = await putRute.json();
        console.log(">>>put route", putRouteData);

        console.log("*****************************");

        const patchRute = await fetch(`${base}/routes/2`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 2,
            name: "Vishal Fast Train",
            direction: "North",
          }),
        });
        const patchRouteData = await patchRute.json();
        console.log(">>>patch route", patchRouteData);

        console.log("*****************************");

        const deleteRoute = await fetch(`${base}/routes/1`, {
          method: "DELETE",
        });
        const deleteRouteData = await deleteRoute.json();
        console.log(">>>delete route", deleteRouteData);
      } catch (err) {
        console.log(err);
      }

      server.close(() => {
        console.log("Blog 1 served......");
        resolve();
      });
    });
  });
}

function block_1_httpMethods() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    // catching file path using the wildcard *
    /*
     👉🏾 wildcard matlb kuch bhi , koi bhi path capture kr lega 
     /files/docs/readme.txt
     /files/assets/style.css
    */
    app.get("/files/*filepath", (req, res) => {
      const filepath = req.params.filepath;
      res.json({ filepath, type: "wildcard" });
    });

    // ye kya chiz hai ??? same chiz hai jo pehle kar rhe the
    app
      .route("/schedule")
      .get((req, res) => {})
      .post((req, res) => {})
      .put((req, res) => {})
      .delete((req, res) => {});

    /*
      📝 upr jo handler aka callback hain, unko kisi sepereate file mein likh ke yaha import kr ke use kr lenge
      app
      .route("/schedule")
      .get(showData)
      .post(addData)
      .put(updateData)
      .delete(deleteData);
    */

    //   middleware, kisi bhi route k pass jaane ke pehle match krta hai
    /*
        🧠 What app.use() actually does?
        👉 It runs BEFORE your routes
        👉 It acts like a checkpoint / gate / middleware

        🚪 Simple real-life analogy

        Think of a mall security check:

        You enter mall
        Security checks you
        Then you go to shops

        👉 That security check = app.use()

        const express = require("express");
        const app = express();

        // middleware
        app.use((req, res, next) => {
            console.log("Middleware ran!");
            next(); // VERY IMPORTANT
        });

        // route
        app.get("/", (req, res) => {
        res.send("Home page");
        });

        app.listen(3000);
    */
    app.use("/api", (req, res) => {
      // its a prefetch match
    });

    // Creating server below
    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      try {
      } catch (err) {
        console.log(err);
      }

      server.close(() => {
        console.log("Blog 1 served......");
        resolve();
      });
    });
  });
}

async function main() {
  await block_1_httpMethods();

  process.exit(0);
}

main();
