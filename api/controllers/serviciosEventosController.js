const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const dfs = require("date-from-string");

exports.postServiciosEventos = (req, res, next) => {
  let datos = req.body;
  prisma.servicioseventos
    .create({ data: datos })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};

exports.getServiciosEventos = (req, res, next) => {
  prisma.servicioseventos
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
  const idServicio = parseInt(req.params.id);
  prisma.servicioseventos
    .findUnique({ where: { id: idServicio } })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};
