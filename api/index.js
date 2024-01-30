const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // Import cors module
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

dotenv.config();

// Middleware for handling unhandled errors
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Use cors middleware with specific origin(s)
app.use(cors({
  origin: ["https://netflix-app-43rl.onrender.com", "https://netflix-app-backend-sq6l.onrender.com"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // enable set cookie
}));

// Connect to MongoDB using promises
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connection Successful");

    // Middleware to parse JSON requests
    app.use(express.json());

    // Routes
    app.use("/api/auth", authRoute);
    app.use("/api/users", userRoute);
    app.use("/api/movies", movieRoute);
    app.use("/api/lists", listRoute);

    // Start the server
    const PORT = process.env.PORT || 8800;
    app.listen(PORT, () => {
      console.log(`Backend server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
  });
