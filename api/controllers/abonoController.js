const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ log: ["query"] });
const dfs = require("date-from-string");
const mysql = require("mysql2");

exports.postAbono = (req, res, next) => {
  let datos = req.body;
  const fecha = dfs.parse(req.body.fecha);
  datos.fecha = fecha;
  console.log(datos);
  prisma.$queryRaw`BEGIN TRANSACTION;`
    .then((result) => {
      prisma.$queryRaw`INSERT INTO  abono(fecha,cantidad,idpagos) VALUES(${fecha},${req.body.cantidad},${req.body.idpagos});`
        .then((result) => {
          prisma.$queryRaw`COMMIT;`
            .then((result) => {
              prisma.$queryRaw`CALL transfer(${req.body.idpagos},${req.body.cantidad})`
                .then((result) => {
                  res.send({ message: true });
                })
                .catch((err) => {});
            })
            .catch((err) => {});
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {});

  /* prisma.abono
    .create({ data: datos })
    .then((result) => {
      res.statusCode = 202;

      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    }); */
};

exports.getAbono = (req, res, next) => {
  prisma.abono
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
  const idAbono = parseInt(req.params.id);
  prisma.abono
    .findUnique({ where: { id: idAbono } })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};
