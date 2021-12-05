const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Home", active: { Home: true } });
});

router.get("/contact", (req, res) => {
  res.render("contactus", { active: { Contact: true } });
});

router.get("/facilities", (req, res) => {
  res.render("facilities", { title: "Courses", active: { Facilities: true } });
});

router.get("/services", (req, res) => {
  res.render("services", { active: { Services: true } });
});

router.get("/about", (req, res) => {
  res.render("about-us", { active: { About: true } });
});

router.get("/*", (req, res) => {
  res.render("404");
});

module.exports = router;
