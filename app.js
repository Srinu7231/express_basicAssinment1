const express = require("express");
const http = require("http");
const app = express();
const userRoute = require("./Routes/user");
const directory = require("./path");
const path = require("path");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded());
console.log("13 ================>", userRoute.users);
// we were using user route here
app.use(userRoute.routes);
app.use(express.static(path.join(directory, "JSCODES")));
app.get("/users", (req, res, next) => {
  // res.sendFile(path.join(directory,'Views','user.html'))
  res.render("user.ejs", { pageTitle: "users", users: userRoute.users });
});
app.use((res, req, next) => {
  console.log(res.statusCode);
  // req.status(404).sendFile(path.join(directory,'Views','404page.html'))
  req.status(404).render("404", { pageTitle: "404 Error" });
});

const server = http.createServer(app);
app.listen(3000);
