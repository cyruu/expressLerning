const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use((req, res, next) => {
  console.log("middleware arunning");
  next();
});

app.get("/", function (req, res) {
  //   res.send("hello world");
  res.render("index", { age: 12 });
});
app.get("/contact", function (req, res) {
  res.render("contact");
});
app.get("/profile/:username", function (req, res) {
  res.send("hello " + req.params.username);
});

app.listen(3000);
