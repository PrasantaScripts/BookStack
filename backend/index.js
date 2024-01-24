import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/bookRoute.js";
import cors from "cors";
const app = express();

//middleware of the s test1
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("req :>> ", req);
  return res.status(234).send("welcome to book store project");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("the database connection got successfull");
  })
  .catch((err) => {
    console.log("During database connection Error", err);
  });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
