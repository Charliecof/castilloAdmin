const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const dfs = require("date-from-string");

exports.postPagos = (req, res, next) => {
  let datos = req.body;
  const fecha = dfs.parse(req.body.fechalimite);
  datos.fechalimite = fecha;
  prisma.pagos
    .create({ data: datos })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};

exports.getPagos = (req, res, next) => {
  prisma.eventos
    .findMany({
      where: {
        pagado: false,
      },
      include: {
        pagos: true,
        cliente: {
          select: {
            nombre: true,
          },
        },
      },
    })
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getById = (req, res, next) => {
  const idPagos = parseInt(req.params.id);
  prisma.pagos
    .findUnique({ where: { id: idPagos } })
    .then((result) => {
      res.statusCode = 202;
      res.send(result);
    })
    .catch((err) => {});
};
