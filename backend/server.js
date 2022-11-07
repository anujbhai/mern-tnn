require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRutes);
app.use("/api/user", userRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`listening in port ${process.env.PORT}`);
      console.log("connected to mongodb");
    });
  })
  .catch(err => console.log(err));
