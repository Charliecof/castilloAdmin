const express = require("express");
const eventosRoutes = require("./routes/eventos");
const app = express();

app.use("/eventos", eventosRoutes);

app.listen(3000);
