const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.postPaquete = (req, res, next) => {
  const datos = req.body;
  prisma.paquete
    .create({ data: datos })
    .then((result) => {
      res.statusCode = 202;
      res.send({ ...result, status: true });
      console.log(result);
    })
    .catch((err) => {
      res.statusCode = 505;
      res.send({ status: false });
    });
};

exports.patchPaquete = (req, res, next) => {
  prisma.paquete
    .update({ where: { id: req.body.id }, data: req.body })
    .then((result) => {
      const aux = { ...result, status: true };
      res.statusCode = 202;
      res.send(aux);
    })
    .catch((err) => {
      res.statusCode = 505;
      res.send(err);
    });
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
