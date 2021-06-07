const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.postGastoEvento = (req, res, next) => {
  let datos = req.body;
  prisma.gastoseventos
    .create({ data: datos })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};

exports.getGastoEvento = (req, res, next) => {
  prisma.gastoseventos
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
  prisma.gastoseventos
    .findUnique({ where: { id: idGasto } })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};
