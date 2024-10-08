const express = require("express");
const morgan = require("morgan"); //a middleware that logs requests onto the console
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors"); //prevents cors blockage

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// read data from the body into req.body, max is 10kb.
app.use(express.json({ limit: "10kb" })); //data from body shall be added to req

//to work with cookies
app.use(cookieParser());

//to print requests in log
app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to byteRoute!",
  });
});

app.get("/test", async (req, res, next) => {
  res.status(200).json({
    status: "success",
  });
});

// cloudinary connection
require("./config/cloudinary").cloudinaryConnect();

const cloudinary = require("cloudinary").v2;

//defining routers
// todo: routes here
const routers = require("./routes/routers");
app.use("/api/v1/", routers);

const userRoutes = require("./routes/User");
app.use("/student", userRoutes);

const Scholarship = require("./routes/Scholarship");


const AdminRoutes = require("./routes/Admin");
app.use("/admin", AdminRoutes);
const ScholarshipRoute=require("./routes/Scholarship.js")

app.use("/scholarship",Scholarship)

const ChatRoutes = require("./routes/Chat.js")
app.use("/chat", ChatRoutes)
//for undefined routs
const AppError = require("./util/appError");
app.all("*", (req, res, next) => {
  next(
    new AppError(
      `Can't find ${req.originalUrl} on byteRoute server!`,
      404
    )
  );
});

//in case of operational error this middleware function will be called to return relevant error message
const globalErrorController = require("./controllers/errorController");
app.use(globalErrorController);

module.exports = app;
