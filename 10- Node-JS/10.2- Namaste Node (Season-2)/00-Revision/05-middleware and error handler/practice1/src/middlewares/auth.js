const adminAuth = (req, res, next) => {
  let token = "xyz";
  let isAdminAuth = token == "xyz";

  if (!isAdminAuth) {
    res.send("Not Authorized User");
  } else {
    console.log("Authorized user");
    next();
  }
};

const userAuth = (req, res, next) => {
  let token = "USER";
  const authUser = token === "USE";

  if (!authUser) {
    res.send("User auth failed");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
