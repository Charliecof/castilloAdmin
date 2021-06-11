const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.postServicios = (req, res, next) => {
  const datos = req.body;
  console.log(datos);
  prisma.servicios
    .create({ data: datos })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};

exports.getServicios = (req, res, next) => {
  prisma.servicios
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
  const idServicios = parseInt(req.params.id);
  prisma.servicios
    .findUnique({ where: { id: idServicios } })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};
exports.get;
