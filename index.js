const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

mongoose
  .connect("mongodb://127.0.0.1:27017/mydb", { useNewUrlParser: true })
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", routes);

    app.listen(5000, () => {
      console.log("Server has started 🟢 ....!");
    });
  });
