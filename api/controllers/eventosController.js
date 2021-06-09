const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const dfs = require("date-from-string");

exports.postEventos = (req, res, next) => {
  const fecha = dfs.parse(req.body.fecha);
  const hora = dfs.parse("2021-01-01T" + req.body.hora);
  let total = 10;
  prisma.paquete
    .findUnique({ where: { id: req.body.idpaquete } })
    .then((result) => {
      total = result.preciounitario * req.body.adultos;
      prisma.paqueteevento
        .create({
          data: {
            adultos: req.body.adultos,
            ninios: req.body.ninios,
            total: total,
            idpaquete: req.body.idpaquete,
          },
        })
        .then((result) => {
          prisma.eventos
            .create({
              data: {
                fecha: fecha,
                hora: hora,
                total: total,
                idpaquete: result.id,
                idcliente: req.body.idcliente,
                celebracion: req.body.celebracion,
                pagado: false,
              },
            })
            .then((result) => {
              res.statusCode = 202;
              res.send(result);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {});
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEventos = (req, res, next) => {
  prisma.eventos
    .findMany({ include: { cliente: true } })
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
