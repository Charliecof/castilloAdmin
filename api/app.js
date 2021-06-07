const express = require("express");
const app = express();

//Rutas
const eventosRoutes = require("./routes/eventosRoutes");
const paquetesRoutes = require("./routes/paquetesRoutes");
const clientesRoutes = require("./routes/clienteRouter");
const serviciosRoutes = require("./routes/serviciosRouter");
const rolRoutes = require("./routes/rolRoutes");
const pagosRoutes = require("./routes/pagosRoutes");
const empleadosRoutes = require("./routes/empleadoRouter");
const abonoRoutes = require("./routes/abonoRoutes");
const gastoEventoRoutes = require("./routes/gastoEventoRoutes");
const gastoFijoRoutes = require("./routes/gastoFijoRoutes");
const mesRoutes = require("./routes/mesRoutes");
const paqueteEventoRoutes = require("./routes/paqueteEventoRoutes");
const serviciosEventosRoutes = require("./routes/serviciosEventosRoutes");

app.use(express.json());

app.use("/eventos", eventosRoutes);
app.use("/paquetes", paquetesRoutes);
app.use("/clientes", clientesRoutes);
app.use("/servicios", serviciosRoutes);
app.use("/rol", rolRoutes);
app.use("/pagos", pagosRoutes);
app.use("/empleados", empleadosRoutes);
app.use("/abonos", abonoRoutes);
app.use("/gastosfijos", gastoFijoRoutes);
app.use("/gastoseventos", gastoEventoRoutes);
app.use("/mes", mesRoutes);
app.use("/paqueteeventos", paqueteEventoRoutes);
app.use("/servicioseventos", serviciosEventosRoutes);

app.listen(3000);
