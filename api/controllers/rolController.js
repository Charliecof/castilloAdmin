const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.postRol = (req, res, next) => {
  const datos = req.body;
  prisma.rol
    .create({ data: datos })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};

exports.getRol = (req, res, next) => {
  prisma.rol
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
  const idRol = parseInt(req.params.id);
  prisma.rol
    .findUnique({ where: { id: idRol } })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};
