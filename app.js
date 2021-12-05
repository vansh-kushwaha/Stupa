const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const genRoutes = require("./routes/generalRoutes");

app.use(express.static(path.join(__dirname, "./public")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views/templates"));
hbs.registerPartials(path.join(__dirname, "./views/partials"));

app.use("", genRoutes);

// Starting Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is up and runing at http://localhost:${port}`);
});
