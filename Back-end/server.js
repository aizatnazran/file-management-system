const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileRoutes = require("./routes/fileRoutes");

const app = express();

//Middleware setup
app.use(bodyParser.json());
app.use(cors());
app.use("/files", fileRoutes);

//Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
