const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const dfs = require("date-from-string");

exports.postEventos = (req, res, next) => {
  const fecha = dfs.parse(req.body.fecha);
  const hora = dfs.parse("2021-01-01T" + req.body.hora);
  let total = 10;
  console.log(req.body);
  prisma.paquete
    .findUnique({ where: { id: req.body.idpaquete } })
    .then((result) => {
      console.log(result);
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

exports.patchEventos = (req, res, next) => {
  console.log(req.body);
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

exports.deleteEventos = (req, res, next) => {
  console.log(req.params.id);
  prisma.eventos
    .delete({ where: { id: parseInt(req.params.id) } })
    .then((result) => {
      res.statusCode = 202;
      res.send({ status: "deleted" });
    })
    .catch((err) => {
      res.statusCode = 505;
      res.send({ status: "failed" });
    });
};

exports.getById = (req, res, next) => {
  const idEventos = parseInt(req.params.id);
  prisma.eventos
    .findUnique({ where: { id: idEventos }, include: { paqueteevento: true } })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};
