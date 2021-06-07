const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const dfs = require("date-from-string");

exports.postAbono = (req, res, next) => {
  let datos = req.body;
  const fecha = dfs.parse(req.body.fecha);
  datos.fecha = fecha;
  prisma.abono
    .create({ data: datos })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};

exports.getAbono = (req, res, next) => {
  prisma.abono
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
  const idAbono = parseInt(req.params.id);
  prisma.abono
    .findUnique({ where: { id: idAbono } })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};
