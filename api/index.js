const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const dotenv = require("dotenv");

const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
dotenv.config({ path: "./config.env" });
// dotenv.config();

const app = express();

const db = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db)
  .then(() => console.log("Successfully connect MongoDB"))
  .catch((err) => console.log(err));


app.use(cors())
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on port ${port} `);
});
