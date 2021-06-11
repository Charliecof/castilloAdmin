const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.postGastoFijo = (req, res, next) => {
  let datos = req.body;
  prisma.gastofijo
    .create({ data: datos })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};

exports.getGastoFijo = (req, res, next) => {
  prisma.gastofijo
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
  const idGasto = parseInt(req.params.id);
  prisma.gastofijo
    .findUnique({ where: { id: idGasto } })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};
