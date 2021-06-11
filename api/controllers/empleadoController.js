const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const dfs = require("date-from-string");

exports.postEmpleados = (req, res, next) => {
  let datos = req.body;
  prisma.empleados
    .create({ data: datos })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};

exports.getEmpleados = (req, res, next) => {
  prisma.empleados
    .findMany()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getById = (req, res, next) => {
  const idEmpleados = parseInt(req.params.id);
  prisma.empleados
    .findUnique({ where: { id: idEmpleados } })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};
