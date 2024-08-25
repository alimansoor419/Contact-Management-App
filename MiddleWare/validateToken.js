import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export const validateToken = expressAsyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.header.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("user is not authrized");
      }
      console.log(decoded);
      req.user = decoded.user;
      next();
    });
    res.status(200);
  }
  if (!token) {
    res.status(401);
    throw new Error("no token");
  }
});
