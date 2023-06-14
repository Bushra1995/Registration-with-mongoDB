require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const mongoose = require('mongoose');
// database connection
// connection();

// our middlewares next line
app.use(express.json())
app.use(cors());
// console.log()

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// const port = process.env.PORT || 8080;
// app.listen(port, console.log(`Listening on port ${port}...`));
console.log(process.env.DB);
mongoose
    .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(3000, () => {
            console.log(`Starting server on port ${3000}`);
        });
    });

