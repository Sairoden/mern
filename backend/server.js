// Libraries
const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Environment Variable Set Up (ENV)
dotenv.config({ path: "./.env" });

mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

process.on("unhandledRejection", err => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => process.exit(1));
});

process.on("SIGTERM", () => {
  console.log("🤯 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});

process.on("uncaughtException", err => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

// 130
