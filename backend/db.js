const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://joshidurvankur29:Durva29@codex.duc0x.mongodb.net/?retryWrites=true&w=majority&appName=CodeX",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Export the mongoose instance for reusability in other modules
module.exports = mongoose;
