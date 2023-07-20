import dotenv from "dotenv";
import mongoose from "mongoose";

import app from "./app.js";

dotenv.config({ path: "./.env" });

const port = process.env.PORT || 3000;

// const mongoUser = process.env['MONGO_USER']
// const mongoKey = process.env['MONGO_PASS']
// const mongoUrl = `mongodb+srv://${mongoUser}:${mongoKey}@cluster0.l1cdhsn.mongodb.net/?retryWrites=true&w=majority`

const mongoUrl = `mongodb+srv://surajmehta8097:H4w3a6MaTocpisSQ@cluster0.l1cdhsn.mongodb.net`

mongoose
  .connect(`${mongoUrl}/users`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log("server is up and running on port ", port);
});
