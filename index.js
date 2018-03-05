const express = require("express");
const app = express();
const mongo = require("mongo");
const hbs = require("hbs");
const parser = require("body-parser");
const passport = require("passport");
const cookie = require("cookie-parser");
const bcrypt = require("bcrypt");
const Event = require("./models/Event");
const eventsController = require("./controllers/event");
const methodOverride = require("method-override");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// app.use(cookieParser());
// app.use(bodyParser());

app.get("/", (req, res) => {
  Event.find({}).then(events => {
    res.render("index", { events });
  });
});

app.use("/events", eventsController);

app.listen(3000, () => {
  console.log("Funciona!");
});
