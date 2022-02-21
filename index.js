const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routers = require("./routes/login");
app.use(express.json({}))
app.use(cors());
app.use(bodyParser({limit: 10000}));

app.use(routers);



app.listen(process.env.PORT, () => {
    console.log("Server runnig!!");
});
