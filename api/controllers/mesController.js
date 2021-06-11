const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const dfs = require("date-from-string");

exports.postMes = (req, res, next) => {
  let datos = req.body;
  datos.mes = dfs.parse(req.body.mes);
  prisma.mes
    .create({ data: datos })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};

exports.getMes = (req, res, next) => {
  prisma.mes
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
  const idMes = parseInt(req.params.id);
  prisma.mes
    .findUnique({ where: { id: idMes } })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};
