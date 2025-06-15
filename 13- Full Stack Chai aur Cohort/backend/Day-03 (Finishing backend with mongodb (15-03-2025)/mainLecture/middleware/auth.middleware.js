import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  try {
    console.log(req.cookies, ">>>>req cookies");
    const token = req.cookies?.token;
    console.log("TOKEN FOUND: ", token ? "YES" : "NO");

    if (!token) {
      console.log("NO TOKEN");
      return res.status(401).json({
        success: false,
        message: "Authentication failed",
      });
    }

    let decoded = await jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded data: ", decoded);

    req.user = decoded;
    next();
  } catch (err) {
    console.log("Auth middleware failure");
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
