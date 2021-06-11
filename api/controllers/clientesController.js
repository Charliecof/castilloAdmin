const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getClientes = (req, res, next) => {
  prisma.cliente
    .findMany()
    .then((result) => {
      console.log(result[0].telefono);

      res.satusCode = 202;
      res.send(result);
    })
    .catch((err) => {
      res.satusCode = 505;
      res.send(err);
    });
};

exports.getClientesWhere = (req, res, next) => {
  const data = parseInt(req.query.telefono);
  console.log(data);
  prisma.cliente
    .findMany({ where: { telefono: data } })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
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

exports.patchCliente = (req, res, next) => {
  prisma.cliente
    .update({ where: { id: req.body.id }, data: req.body })
    .then((result) => {
      const aux = { ...result, status: true };
      res.satusCode = 202;
      res.send(aux);
    })
    .catch((err) => {
      res.statusCode = 505;
      res.send(err);
    });
};
