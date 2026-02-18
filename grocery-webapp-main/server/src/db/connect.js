const mongoose = require("mongoose");

// ✅ Use LOCAL MongoDB instead of Atlas
const db = 'mongodb://127.0.0.1:27017/grocery-webapp';

// Connect to MongoDB
mongoose.connect(db)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((e) => {
    console.log("MongoDB connection error:", e);
  });

// mongodb://localhost:27017