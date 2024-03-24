const express = require("express");
const router = express.Router();
const path = require("path");
const directory = require("../path");
let users = [];
router.get("/", (req, res, next) => {
  // res.send("<h1>Main root ..........</h1>");
  console.log(req?.body);
  res.render("addUser", { pageTitle: "add user" });
});
router.post("/", (req, res, next) => {
  console.log(req?.body);
  users.push({ name: req?.body?.name });
  res.redirect("/users");
});

// router.get("/users", (req, res, next) => {
//   // res.sendFile(path.join(directory,'Views','user.html'))
//   res.render("user.ejs", { pageTitle: "users" });
// });
exports.routes = router;
exports.users = users;
