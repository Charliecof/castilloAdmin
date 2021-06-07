const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.postPaquete = (req, res, next) => {
  const datos = req.body;
  console.log(datos);
  prisma.paquete
    .create({ data: datos })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};

exports.getPaquetes = (req, res, next) => {
  prisma.paquete
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
  prisma.paquete
    .findUnique({ where: { id: idPaquete } })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};
