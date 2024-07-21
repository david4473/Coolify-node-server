const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tasksRoutes = require("./routes/tasks");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/tasks", tasksRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
