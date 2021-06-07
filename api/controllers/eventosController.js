const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const dfs = require("date-from-string");

exports.postEventos = (req, res, next) => {
  let datos = req.body;
  const fecha = dfs.parse(req.body.fecha);
  const hora = dfs.parse("2021-01-01T" + req.body.hora);
  console.log(hora);
  datos.fecha = fecha;
  datos.hora = hora;
  console.log(datos);
  prisma.eventos
    .create({ data: datos })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};

exports.getEventos = (req, res, next) => {
  prisma.eventos
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
  const idEventos = parseInt(req.params.id);
  prisma.eventos
    .findUnique({ where: { id: idEventos } })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};
