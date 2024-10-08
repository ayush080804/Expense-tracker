const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
// config dot env file
dotenv.config();

//databse call
connectDb();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
//user
app.use("/api/v1/users", require("./routes/userRoute"));
//transection
app.use('/api/v1/transection', require('./routes/transectionRoutes'))

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
