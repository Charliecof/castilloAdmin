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
  const data = req.body;
  const idData = parseInt(req.params.id);
  const hora = dfs.parse("2021-01-01T" + req.body.hora + ":00:00.000Z");
  data.paqueteevento.adultos = parseInt(data.paqueteevento.adultos);
  data.paqueteevento.ninios = parseInt(data.paqueteevento.ninios);
  data.fecha = dfs.parse(data.fecha);
  data.hora = hora;
  const aux = { ...data.paqueteevento };
  prisma.paquete
    .findUnique({ where: { id: data.paqueteevento.idpaquete } })
    .then((result) => {
      data.paqueteevento.total =
        result.preciounitario * data.paqueteevento.adultos;
      data.total = result.preciounitario * data.paqueteevento.adultos;
      delete data["paqueteevento"];
      aux.total = aux.adultos * result.preciounitario;
      prisma.eventos
        .update({
          where: { id: idData },
          data: data,
        })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
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
      if (result) {
        res.statusCode = 202;
        res.send(result);
      } else {
        throw console.error("error");
      }
    })
    .catch((err) => {
      res.statusCode = 505;
      res.send({ status: "failed" });
    });
};
