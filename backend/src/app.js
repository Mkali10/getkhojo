const express = require("express");
const cors = require("cors");
const auth = require("./authController");
const admin = require("./adminController");
const subscription = require("./subscriptionController");
const ppt = require("./pptGenerator");
const excel = require("./excelGenerator");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("GetKhojo Backend Running"));

app.use("/auth", auth);
app.use("/admin", admin);
app.use("/subscription", subscription);
app.use("/ppt", ppt);
app.use("/excel", excel);

app.listen(5000, () => console.log("Backend running on port 5000"));
