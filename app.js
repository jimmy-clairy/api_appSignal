const express = require("express");
const app = express();

const blogRouter = require("./routes/BlogRoutes");

//configure mongoose
const mongoose = require("mongoose");
const pass = require("./passwords");

mongoose.connect(
    pass.mongoDB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);

//middleware
app.use(express.json());

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

app.use("/api/blogs", blogRouter);

module.exports = app;