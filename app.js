const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const skill = require('./routes/skillRoutes');
const about = require('./routes/aboutRoute');
const experiences = require('./routes/experiencesRoute');
const home = require('./routes/homeRoute');
const contactUs = require('./routes/contactUsRoute');
const project = require('./routes/projectRout');
const user = require('./routes/UserRoute');

app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend URL
  credentials: true, // Allow credentials (cookies) to be sent
};

app.use(cors(corsOptions));

app.use("/api/v1", about);
app.use("/api/v1", skill);
app.use("/api/v1", experiences);
app.use("/api/v1", home);
app.use("/api/v1", contactUs);
app.use("/api/v1", project);
app.use("/api/v1", user);

module.exports = app;
