const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const db = require("./config").mongoURI;

// set up express

const app = express();
app.use(express.json());
app.use(cors());

// Koknek ke MongoDB
mongoose
    .connect(db)
    .then(() => console.log("mongoDB Connected"))
    .catch((err) => console.log(err));

//routes
app.use(express.static('public'))
app.use("/users", require("./routes/user"));
app.use("/product", require("./routes/product"));
const port = process.env.PORT || 3001;

app.listen(port, () => console.log("server running on port "+port));