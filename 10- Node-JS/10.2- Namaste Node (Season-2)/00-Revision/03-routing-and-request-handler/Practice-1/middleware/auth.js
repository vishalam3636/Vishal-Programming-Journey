const adminAuth = (req, res, next) => {
  // Logic for authentication
  let authToken = "xyz";
  let auth = authToken === "xyz";

  if (!authToken) {
    console.log("Successfully authenticated !!");
    res.status(401).send("Admin Auth failed!!");
  } else {
    console.log("Admin Successfully authenticated !!");
    next();
  }
};

const userAuth = (req, res, next) => {
  let authToken = "USER";
  let auth = authToken === "USER";

  if (!auth) {
    console.log("User auth failed");
    res.status(401).send("User Auth Failed");
  } else {
    console.log("User Successfully authenticated !!");
    next();
  }
};

module.exports = { adminAuth, userAuth };
