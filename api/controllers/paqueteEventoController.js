const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const dfs = require("date-from-string");

exports.postPaqueteEvento = (req, res, next) => {
  let datos = req.body;
  prisma.paqueteevento
    .create({ data: datos })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};

exports.getPaqueteEvento = (req, res, next) => {
  prisma.paqueteevento
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
  const idPaquete = parseInt(req.params.id);
  prisma.paqueteevento
    .findUnique({ where: { id: idPaquete } })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};
