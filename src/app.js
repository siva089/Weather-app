const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();
const forecast=require('./utils/forecast')
const geocode=require('./utils/geocode')
//define paths
const publicDirectPath = path.join(__dirname, "../public");
app.set("view engine", "hbs");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);
app.set("views", viewsPath);
app.use(express.static(publicDirectPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    location: "ongole",
    name: "siva"
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "siva"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "help",
    help: "this is some helpful text",
    name: "siva"
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "please provide address"
    });
  }
  geocode(req.query.address, (error, data={}) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.latitude, data.longitude, (error, forecastdata) => {
        res.send({
            forecast: forecastdata,
            location: data.location
        });
    });
  });
  
});
app.get("*", (req, res) => {
  res.render("error");
});
app.listen(3000, () => {
  console.log("server started");
});
