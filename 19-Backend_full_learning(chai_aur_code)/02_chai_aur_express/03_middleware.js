const express = require("express");

function block_1_httpMethods() {
  return new Promise((resolve) => {
    const app = express();

    const logs = [];

    app.use(express.json()); // kisi bhi route ke pass ja rahe to mere se mil ke jana
    app.use(express.urlencoded({ extended: true, limit: "50kb" }));
    app.use(
      express.static(ShadowRoot, {
        dotfiles: "ignore",
        maxAge: 0,
      }),
    );

    // our own middleware request logger like winsten
    app.use((req, res, next) => {
      // yaha likhte hain business logic, it can be anything
      // add to database
      // conspole.log() everything
      // write in some file
      // Authenticate user
      if (env === "PROD") {
        const logEntry = `${req.method}:${req.url}`;
        logs.push(logEntry);
        console.log(`[LOG] -- ${logEntry}`);
      }

      // if your request hangs forever, to samjho next() nahi laga hai
      next();
    });

    app.use((req, res, next) => {
      req.sartTime = Date.now();

      res.on("finish", () => {
        const duration = Date.now() - req.sartTime;
        console.log(`[TIMER] -- ${req.method} - ${req.url} took ${duration}ms`);
      });

      next();
    });

    // authentication middleware
    function authMe(req, res, next) {
      const token = req.headers["x-auth-token"];

      if (!token) {
        return res.status(401).json({ error: "No token, please login" });
      }

      if (token !== "secret-chaicode") {
        return res.status(403).json({ error: "Invalid token" });
      }

      // token -> extract data from token -> userId, email

      req.user = {
        id: 1,
        name: "Vishal",
        role: "admin",
      };

      next();
    }

    function getRole(role) {
      return (req, res, next) => {
        if (Array.isArray(role)) {
          if (!req.user || !role.includes(req.user.role)) {
            return res.status(403).json({ error: `Role ${role} required` });
          }
        } else {
          if (!req.user || req.user.role !== role) {
            return res.status(403).json({ error: `Role ${role} required` });
          }
        }
        next();
      };
    }

    // making rate limiter middleware
    function rateLimit(maxRequest) {
      let count = 0;
      return (req, res, next) => {
        count++;
        if (count > maxRequest) {
          return res
            .status(429)
            .json({ error: "Too many requests, please try after sometime" });
        }
        next();
      };
    }

    // /profile pe jake is order mein pehle middlewares k through pass ho
    app.get("/profile", authMe, getRole("admin"), () => {});
    app.get("/profile", authMe, getRole("teacher"), () => {});
    app.get("/profile", authMe, getRole("student"), () => {});

    app.get("/profile", authMe, getRole(["student"]), () => {});
    app.get(
      "/profile",
      authMe,
      getRole(["admin", "teacher", "student"]),
      () => {},
    );

    // rate limiter
    const limitedEndPoint = rateLimit(3);

    app.get("/limited", limitedEndPoint, (req, res) => {});

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
