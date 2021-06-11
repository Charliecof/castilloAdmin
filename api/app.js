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
const authRoutes = require("./routes/authRoutes");
const gananciasRoutes = require("./routes/gananciasRoutes");

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

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
app.use("/auth", authRoutes);
app.use("/ganancia", gananciasRoutes);
app.listen(8000);
