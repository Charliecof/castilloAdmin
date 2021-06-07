const express = require("express");
const app = express();

//Rutas
const eventosRoutes = require("./routes/eventosRoutes");
const paquetesRoutes = require("./routes/paquetesRoutes");
const clientesRoutes = require("./routes/clienteRouter");
const serviciosRoutes = require("./routes/serviciosRouter");

app.use(express.json());

app.use("/eventos", eventosRoutes);
app.use("/paquetes", paquetesRoutes);
app.use("/clientes", clientesRoutes);
app.use("/servicios", serviciosRoutes);

app.listen(3000);
