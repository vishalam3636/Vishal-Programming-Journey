const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked !!");

  let token = "xyz";
  let isAdminAuthorized = token == "xyzz";

  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("User auth is getting checked !!");

  let token = "xyz";
  let isUserAuthorized = token == "xyz";

  if (!isUserAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
