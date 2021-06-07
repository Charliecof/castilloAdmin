const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getClientes = (req, res, next) => {
  prisma.cliente
    .findMany()
    .then((result) => {
      res.satusCode = 202;
      res.send(result);
    })
    .catch((err) => {
      res.satusCode = 505;
      res.send(err);
    });
};

exports.getById = (req, res, next) => {
  const idCliente = parseInt(req.params.id);
  prisma.cliente
    .findUnique({ where: { id: idCliente } })
    .then((result) => {
      res.satusCode = 202;
      res.send(result);
    })
    .catch((err) => {
      res.satusCode = 505;
      res.send(err);
    });
};

exports.postCliente = (req, res, next) => {
  const datos = req.body;
  prisma.cliente
    .create({ data: datos })
    .then((result) => {
      res.satusCode = 202;
      res.send(result);
    })
    .catch((err) => {
      res.satusCode = 505;
      res.send(err);
    });
};